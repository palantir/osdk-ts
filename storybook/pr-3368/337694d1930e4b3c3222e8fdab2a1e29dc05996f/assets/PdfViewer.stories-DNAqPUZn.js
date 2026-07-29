import{R as i,O as M,j as y,M as v}from"./iframe-sEvLPolU.js";import{P as D}from"./pdf-viewer-klVjfFQI.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DhziIdrM.js";import"./preload-helper-Bj-XLBLi.js";import"./PdfRenderer-DJLO8bzE.js";import"./index-B2k8cSeY.js";import"./PdfViewer-DQX6sl_e.js";import"./PdfViewer.module.css-B1ZFjMQX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcNI2lZ7.js";import"./index-DixlF0uw.js";import"./index-BOoAG0JL.js";import"./PdfViewerAnnotationLayer-Bh1gh2O-.js";import"./PdfViewerOutlineSidebar-D09QB2Fg.js";import"./PdfViewerSidebarHeader-pG3mEUk1.js";import"./useButton-BEUrubjh.js";import"./useControlled-BkOJfPWz.js";import"./CompositeRoot-BUx0JGot.js";import"./CompositeItem-ihskczSe.js";import"./ToolbarRootContext-DfGIvNaf.js";import"./composite-r2yQWaqa.js";import"./svgIconContainer-B0E6OCJM.js";import"./PdfViewerSearchBar-B453Ix9S.js";import"./chevron-up-C0H_9KqP.js";import"./chevron-down-C-qiYxSC.js";import"./cross-D2g0iDLe.js";import"./PdfViewerSidebar-nuNoMvIo.js";import"./index-CiYHEsPi.js";import"./PdfViewerToolbar-DTKBKvEu.js";import"./Button-DVWy0fU4.js";import"./chevron-right-BU3KCS3X.js";import"./Input-CUUYRNNr.js";import"./minus-kM6udRA1.js";import"./spin-7TMyUGou.js";import"./error-D4_SCDen.js";import"./withOsdkMetrics-Ca05WppM.js";import"./useRegisterUserAgent-C5-Tzo77.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
