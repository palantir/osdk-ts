import{R as i,O as M,j as y,M as v}from"./iframe-YphmHIlA.js";import{P as D}from"./pdf-viewer-BfBsy2Ow.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DGjS76Jd.js";import"./preload-helper-BbYTXdYa.js";import"./PdfRenderer-ETmYtUVD.js";import"./index-DBj6kKKA.js";import"./PdfViewer-DyRSsWXI.js";import"./PdfViewer.module.css-CP9FR_GI.js";import"./PdfViewerAnnotationLayer-D5-6A4kE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BH28Y26v.js";import"./PdfViewerOutlineSidebar-BwKXMkYg.js";import"./PdfViewerSidebarHeader-vqNOSN8l.js";import"./useBaseUiId-CxH4GLRK.js";import"./useControlled-DtYj6NT4.js";import"./CompositeRoot-ChhkDdA1.js";import"./CompositeItem-T6KkZ9iF.js";import"./ToolbarRootContext-CmJt20br.js";import"./composite-CO59Rrsq.js";import"./svgIconContainer-DOAidaDV.js";import"./PdfViewerSearchBar-D16QPiDj.js";import"./chevron-up-D2g3yung.js";import"./chevron-down-DBQLxMf1.js";import"./cross-cHuFqvZv.js";import"./PdfViewerSidebar-BbWNc-3B.js";import"./index-DEQguj02.js";import"./index-jJCt0lzF.js";import"./index-UF1T6Q5c.js";import"./PdfViewerToolbar-DrglUbyk.js";import"./Button-Dl79lnzm.js";import"./chevron-right-DCntNO30.js";import"./Input-pwFauXWt.js";import"./minus-CO9b2uxJ.js";import"./search-CbTXMA3g.js";import"./spin-CAXcYU6l.js";import"./error-L8tpYY7_.js";import"./withOsdkMetrics-6NEq7zlH.js";import"./useRegisterUserAgent-BP8F8X73.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const be={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const Oe=["Default"];export{a as Default,Oe as __namedExportsOrder,be as default};
