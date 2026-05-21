import{R as i,O as M,j as y,M as v}from"./iframe-8SLxQYWp.js";import{P as D}from"./pdf-viewer-bowwxL6P.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-C0wPeoPG.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Bu7KpPoz.js";import"./index-9CMZ2My8.js";import"./PdfViewer-CkF-l28I.js";import"./PdfViewer.module.css-BQ-WH3iy.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-D09Uxj7T.js";import"./index-DwP2ptFB.js";import"./index-Ua3Jo4vl.js";import"./PdfViewerAnnotationLayer-DqoRT6B2.js";import"./PdfViewerOutlineSidebar-b3gc0HGX.js";import"./PdfViewerSidebarHeader-DVkClyMl.js";import"./useBaseUiId-C5FsSbx_.js";import"./useControlled-CqY_M-VH.js";import"./CompositeRoot-CT5iQjZC.js";import"./CompositeItem-RQgcOZ_2.js";import"./ToolbarRootContext-BiHI8G5N.js";import"./composite-z4yhOzHn.js";import"./svgIconContainer-Bt3yAQgq.js";import"./PdfViewerSearchBar-DoW8nznt.js";import"./chevron-up-DWCBfqtD.js";import"./chevron-down-DYBFfCFq.js";import"./cross-D3iMLzRv.js";import"./PdfViewerSidebar-BTUAZFtV.js";import"./index-CdE5Mnak.js";import"./PdfViewerToolbar-5u0OdGrN.js";import"./Button-C51WNRXc.js";import"./chevron-right-DRHEO1N4.js";import"./Input-C6Zxo8Sd.js";import"./minus-D22O3CMu.js";import"./spin-Btr1r7in.js";import"./error-4NmJkcDK.js";import"./withOsdkMetrics-B5uOFKAS.js";import"./useRegisterUserAgent-UWeXkPqH.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
