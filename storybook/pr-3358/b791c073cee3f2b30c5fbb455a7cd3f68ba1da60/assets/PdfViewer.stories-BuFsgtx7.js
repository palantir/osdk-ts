import{R as i,O as M,j as y,M as v}from"./iframe-DszJazu2.js";import{P as D}from"./pdf-viewer-7Kz430tx.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CHANE3U0.js";import"./preload-helper-Bzu0i3_D.js";import"./PdfRenderer-7LFdDQF8.js";import"./index-Ba8E2uBZ.js";import"./PdfViewer-Kf0Odc2C.js";import"./PdfViewer.module.css-CI_V7WA4.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-C7NnPtJZ.js";import"./index-DjghywXo.js";import"./index-gwcYQEqp.js";import"./PdfViewerAnnotationLayer-Cw6P26Q6.js";import"./PdfViewerOutlineSidebar-gWR2uj4i.js";import"./PdfViewerSidebarHeader-CaLQG5dg.js";import"./useBaseUiId-uQFZhVSw.js";import"./useControlled-n_Yv0c_i.js";import"./CompositeRoot-CJLrsaqq.js";import"./CompositeItem-uiLx_b_4.js";import"./ToolbarRootContext-kbbri2LF.js";import"./composite-aIxXXaZF.js";import"./svgIconContainer-CEdnDZiu.js";import"./PdfViewerSearchBar-BN0MlcJ_.js";import"./chevron-up-f4yMTxrg.js";import"./chevron-down-DKM3dFlz.js";import"./cross-BBAUnA0Z.js";import"./PdfViewerSidebar-t5TbF2G0.js";import"./index-BWYwqrEl.js";import"./PdfViewerToolbar-CFuJtoIz.js";import"./Button-CitqSRfE.js";import"./chevron-right-CY9ogxpg.js";import"./Input-DmxxNVOR.js";import"./minus-B1UoTyUl.js";import"./spin-DMtdQS0r.js";import"./error-Bsv4MnOe.js";import"./withOsdkMetrics-CV_f_k9F.js";import"./useRegisterUserAgent-DRGVi_Uv.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
