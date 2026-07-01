import{R as i,O as M,j as y,M as v}from"./iframe-D0SoGzlw.js";import{P as D}from"./pdf-viewer-yQNeEHHz.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-T88Wdozc.js";import"./preload-helper-DZb8OqUn.js";import"./PdfRenderer-B9WDVzgx.js";import"./index-NIcpiCuB.js";import"./PdfViewer-CX9ZIfSU.js";import"./PdfViewer.module.css-F4nLY04V.js";import"./PdfViewerAnnotationLayer-DLJHG65A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKydP3NE.js";import"./PdfViewerOutlineSidebar-CsSrVbrz.js";import"./PdfViewerSidebarHeader-BtHFns0x.js";import"./useBaseUiId-0iVEX2QT.js";import"./useControlled-Bi-kOtn8.js";import"./CompositeRoot-D3xrBBfw.js";import"./CompositeItem-MAxqLPAf.js";import"./ToolbarRootContext-Xkrq5RfV.js";import"./composite-CiiEyupo.js";import"./svgIconContainer-DtLLs9FE.js";import"./PdfViewerSearchBar-Dn8dxF6T.js";import"./chevron-up-DPB1aFyB.js";import"./chevron-down-CAk4Pwea.js";import"./cross-B7-LJPHp.js";import"./PdfViewerSidebar-DGXnrnlV.js";import"./index-D8ICdijG.js";import"./index-Dokg2UqZ.js";import"./index--L61Dm0x.js";import"./PdfViewerToolbar-C620_PA-.js";import"./Button-6j7tEnHD.js";import"./chevron-right-BpTAIKWT.js";import"./Input-Bn3p-c3n.js";import"./minus-DvLGBYZX.js";import"./search-bfQtBKKt.js";import"./spin-CQXTtAiy.js";import"./error-CceLIcCi.js";import"./withOsdkMetrics-DNsUUKzg.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
