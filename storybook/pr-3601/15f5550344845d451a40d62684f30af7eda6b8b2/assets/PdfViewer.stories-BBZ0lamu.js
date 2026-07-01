import{R as i,O as M,j as y,M as v}from"./iframe-DqIi5H2l.js";import{P as D}from"./pdf-viewer-Dgh1Ur-q.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DsdJLsiE.js";import"./preload-helper-C86vAGuD.js";import"./PdfRenderer-CD9R5_wY.js";import"./index-BCQ60U_l.js";import"./PdfViewer-CTPLXEkp.js";import"./PdfViewer.module.css-Dvt5JscE.js";import"./PdfViewerAnnotationLayer-DoR7z_Hx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mxCjNjW-.js";import"./PdfViewerOutlineSidebar-HB7QGzcc.js";import"./PdfViewerSidebarHeader-C_A522f3.js";import"./useBaseUiId-DO463V7b.js";import"./useControlled-DKa5DHWs.js";import"./CompositeRoot-C94aLy5M.js";import"./useCompositeListItem-DthbaNEX.js";import"./ToolbarRootContext-Ch_uoF-V.js";import"./composite-Be1YNfrZ.js";import"./CompositeItem-2qfiSIe9.js";import"./svgIconContainer-CDuC4OGm.js";import"./PdfViewerSearchBar-ChnuDTCp.js";import"./chevron-up-BqkEwI2K.js";import"./chevron-down-B0sS6dSX.js";import"./cross-Dr5XmJc0.js";import"./PdfViewerSidebar-DQn9Q5L8.js";import"./index-t5HjcbWQ.js";import"./index-xTptXFCr.js";import"./index-D4nFVbyi.js";import"./PdfViewerToolbar-BwcVgzxe.js";import"./Button-CV0cYCdF.js";import"./chevron-right-B3FZqZYd.js";import"./Input-qx95b4R1.js";import"./minus-RPV2OpRP.js";import"./spin-_pz0177W.js";import"./error-vGoXLlzz.js";import"./withOsdkMetrics-BWcr1Vjf.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
