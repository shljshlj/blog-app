import { useRef, useState, useEffect } from 'react';

const IconSvg = ({ name, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/icons/${name}.svg`)).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };

    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
}

export default IconSvg;