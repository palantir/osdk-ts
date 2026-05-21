import{R as i,O as M,j as y,M as v}from"./iframe-B6LkVR39.js";import{P as D}from"./pdf-viewer-C6zwbJtm.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DKgyAKmj.js";import"./preload-helper-B8hgsPIJ.js";import"./PdfRenderer-NELqlt5F.js";import"./index-hQE73YKc.js";import"./PdfViewer-Dt-PDefo.js";import"./PdfViewer.module.css-BcF5CvML.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-whfumjNu.js";import"./index-BCmw5Odz.js";import"./index-CR5tamFM.js";import"./PdfViewerAnnotationLayer-BNSZxVBU.js";import"./PdfViewerOutlineSidebar-DKeDoL9d.js";import"./PdfViewerSidebarHeader-B4B8Qi1Y.js";import"./useBaseUiId-D6IWbApj.js";import"./useControlled-BMdIWYpI.js";import"./CompositeRoot-N8w77XLR.js";import"./CompositeItem-Cxa63Ipg.js";import"./ToolbarRootContext-CHYTaIJQ.js";import"./composite-DjxgUVwz.js";import"./svgIconContainer-DH5MupBI.js";import"./PdfViewerSearchBar-DK6-lTyT.js";import"./chevron-up-BN8QL9nO.js";import"./chevron-down-D66btnY2.js";import"./cross-DGTiINyl.js";import"./PdfViewerSidebar-DHfcAmun.js";import"./index-CFKXKyyH.js";import"./PdfViewerToolbar-Bj7Rfb4n.js";import"./Button-CEJ1oP8I.js";import"./chevron-right-Cc7pxEa1.js";import"./Input-DOyDZwS8.js";import"./minus-Dj_DQMXy.js";import"./spin-B4OWquhh.js";import"./error-BUg9gwi2.js";import"./withOsdkMetrics-U6YArvzv.js";import"./useRegisterUserAgent-Dh6UuRkZ.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
