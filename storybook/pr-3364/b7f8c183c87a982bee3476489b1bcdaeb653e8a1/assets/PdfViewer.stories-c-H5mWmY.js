import{R as i,O as M,j as y,M as v}from"./iframe-NNiKZ-n-.js";import{P as D}from"./pdf-viewer-Ct2UhkzY.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BfWp0JC7.js";import"./preload-helper-txBaQJ6z.js";import"./PdfRenderer-uSF6x3Dq.js";import"./index-Dx54j0Sl.js";import"./PdfViewer-FzA5bITu.js";import"./PdfViewer.module.css-CJQwMXvE.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-DxKJ6Mv5.js";import"./index-ByRM_Kwa.js";import"./index-NJYbO4as.js";import"./PdfViewerAnnotationLayer-CljwCl-b.js";import"./PdfViewerOutlineSidebar-BaWQerBH.js";import"./PdfViewerSidebarHeader-DEPn7FuE.js";import"./useBaseUiId-B-bsRYY_.js";import"./useControlled-BP-MV0_E.js";import"./CompositeRoot-Y0Py-QFY.js";import"./CompositeItem-BfWdtjQS.js";import"./ToolbarRootContext-Y4sT2HoU.js";import"./composite-D6XH1csj.js";import"./svgIconContainer-BevHdgnV.js";import"./PdfViewerSearchBar-BLYEtnkb.js";import"./chevron-up-CM7Dk13m.js";import"./chevron-down-Bx6Vxrmp.js";import"./cross-BjOOwfXA.js";import"./PdfViewerSidebar-CG7OiVZv.js";import"./index-CdO72DKK.js";import"./PdfViewerToolbar-BeEHE3jz.js";import"./Button-CZly7EVz.js";import"./chevron-right-ESJy74Bo.js";import"./Input-D5uVPXyI.js";import"./minus-B7FWIvGm.js";import"./spin-DftX7nsE.js";import"./error-CGw8LyAg.js";import"./withOsdkMetrics-ByvDFsgX.js";import"./useRegisterUserAgent-CBrhUVv6.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
