import{R as i,O as M,j as y,M as v}from"./iframe-DapanO-P.js";import{P as D}from"./pdf-viewer-DTl8r_tM.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-D_4an0Xg.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-BK1pi5wC.js";import"./index-BK8hrqxS.js";import"./PdfViewer-BE_h4M6R.js";import"./PdfViewer.module.css-CZEaepHo.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-OnwHNywQ.js";import"./index-D0ctGmqs.js";import"./index-BYhY79FB.js";import"./PdfViewerAnnotationLayer-C6K0qqEX.js";import"./PdfViewerOutlineSidebar-DUyXoOYu.js";import"./PdfViewerSidebarHeader-IVHZNsS7.js";import"./useBaseUiId-DyOjq1NT.js";import"./useControlled-B-qlSgs5.js";import"./CompositeRoot-INinnBAh.js";import"./CompositeItem-ByF7EIVZ.js";import"./ToolbarRootContext-cT7h50G9.js";import"./composite-CIPSM3MK.js";import"./svgIconContainer-Co7lmLmh.js";import"./PdfViewerSearchBar-DXU23O7v.js";import"./chevron-up-D-QcjwZC.js";import"./chevron-down-Cei5T4Vc.js";import"./cross-wFFEdw2s.js";import"./PdfViewerSidebar-PIA0pjNw.js";import"./index-DMGsqMSk.js";import"./PdfViewerToolbar-BKNo6Z18.js";import"./Button-XOxqAeXM.js";import"./chevron-right-BB-t_2A1.js";import"./Input-BwNcLheo.js";import"./minus-DGnoUVbi.js";import"./spin-D3K7cmw8.js";import"./error-LVq2G5SO.js";import"./withOsdkMetrics-C3-fzT8n.js";import"./useRegisterUserAgent--vpgpkwk.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
