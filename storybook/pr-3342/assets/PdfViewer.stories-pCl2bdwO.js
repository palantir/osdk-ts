import{R as i,O as M,j as y,M as v}from"./iframe-D_EUmaph.js";import{P as D}from"./pdf-viewer-CRrDYg3f.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BlbPtFkF.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-C6Zu1yrx.js";import"./index-2oD7dIRE.js";import"./PdfViewer-WOfws8Qs.js";import"./PdfViewer.module.css-BL9E7xYP.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-lvSFrsmK.js";import"./index-D-ZFfBay.js";import"./index-mpvlGTne.js";import"./PdfViewerAnnotationLayer-ChSuvkA9.js";import"./PdfViewerOutlineSidebar-7vGamPXC.js";import"./PdfViewerSidebarHeader-CpByAYk-.js";import"./useBaseUiId-B055awP1.js";import"./useControlled-ChEdLc1B.js";import"./CompositeRoot-DxWR9mc-.js";import"./useCompositeListItem-DJKUxpuX.js";import"./ToolbarRootContext-8004L6JZ.js";import"./composite-Dpqmu7J8.js";import"./CompositeItem-KNxs7MnO.js";import"./svgIconContainer-wbniBoWP.js";import"./PdfViewerSearchBar-Df_Np--N.js";import"./chevron-up-C54MBt8R.js";import"./chevron-down-B5a15l1V.js";import"./cross-DL6Y-j5o.js";import"./PdfViewerSidebar-C7LyeumK.js";import"./index-_p6h-7m7.js";import"./PdfViewerToolbar-CZe598NI.js";import"./Button-BEXEbcea.js";import"./chevron-right-CpF71nMd.js";import"./Input-sq65U7oK.js";import"./minus-Cr2Ra6wg.js";import"./spin-BQko_3Rh.js";import"./error-vlUnTgRU.js";import"./withOsdkMetrics-dgHEMJ9k.js";import"./useRegisterUserAgent-CRVaE7Q-.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const be={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
