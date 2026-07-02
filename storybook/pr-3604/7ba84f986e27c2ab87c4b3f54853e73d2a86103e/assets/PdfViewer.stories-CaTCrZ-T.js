import{R as i,O as M,j as y,M as v}from"./iframe-1Azl5uc0.js";import{P as D}from"./pdf-viewer-BzyZ3pml.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-xV4SCnQr.js";import"./preload-helper-CgDZefhM.js";import"./PdfRenderer-C6ARHDDR.js";import"./index-BJNL37mn.js";import"./PdfViewer-DB5S-_Eo.js";import"./PdfViewer.module.css-CCWckGme.js";import"./PdfViewerAnnotationLayer-C6ohReAY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUEjPXf7.js";import"./PdfViewerOutlineSidebar-z6ARMlM_.js";import"./PdfViewerSidebarHeader-Jdtb89HL.js";import"./useBaseUiId-CXR80G2d.js";import"./useControlled-DCU-8Ica.js";import"./CompositeRoot-DHZa6DH7.js";import"./CompositeItem-MOXOHzqr.js";import"./ToolbarRootContext-ARc5ZBdC.js";import"./composite-C79FaEV-.js";import"./svgIconContainer-CVWrqxWd.js";import"./PdfViewerSearchBar-Do2OQ3gC.js";import"./chevron-up-BjcRDsX8.js";import"./chevron-down-G-yANiQH.js";import"./cross-BJjus-w4.js";import"./PdfViewerSidebar-CNaQqtFk.js";import"./index-CdsRJap3.js";import"./index-DTrnsxUK.js";import"./index-BeAfX0yj.js";import"./PdfViewerToolbar-BgJUkYGa.js";import"./Button-DmGRhsTY.js";import"./chevron-right-CKV3fcsu.js";import"./Input-50n4J--L.js";import"./minus-CYUlzDsX.js";import"./search-CIjMzcGS.js";import"./spin-8CaAwMwR.js";import"./error-B6nnzO4z.js";import"./withOsdkMetrics-BKBUkPyk.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
