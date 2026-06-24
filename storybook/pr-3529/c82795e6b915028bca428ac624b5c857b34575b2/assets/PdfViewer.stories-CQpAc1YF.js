import{R as i,O as M,j as y,M as v}from"./iframe-CKEep6kN.js";import{P as D}from"./pdf-viewer-CvBgMhnY.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-kgfv4vOn.js";import"./preload-helper-CBSwCv04.js";import"./PdfRenderer-eeCX87vj.js";import"./index-B51uXe7x.js";import"./PdfViewer-BwheNRLL.js";import"./PdfViewer.module.css-tMDbM1mA.js";import"./PdfViewerAnnotationLayer-C_r0fhBa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3wI7Rq5.js";import"./PdfViewerOutlineSidebar-2RkjOIQN.js";import"./PdfViewerSidebarHeader-Dl8Qumhn.js";import"./useBaseUiId-Cf3XkTD9.js";import"./useControlled-HMyB8Avt.js";import"./CompositeRoot-CQy6vuN9.js";import"./CompositeItem-37z4RgR6.js";import"./ToolbarRootContext-zRgPe1p-.js";import"./composite-CdSFk3FS.js";import"./svgIconContainer-6a9_FdWG.js";import"./PdfViewerSearchBar--rNAresu.js";import"./chevron-up-SuxBlhOE.js";import"./chevron-down-RO8A3GUE.js";import"./cross-3R2eZov2.js";import"./PdfViewerSidebar-CQhoOhhg.js";import"./index-aOzPFy2G.js";import"./index-GxpKL1PF.js";import"./index-B9Cc25dO.js";import"./PdfViewerToolbar-9r2zXI8x.js";import"./Button-QSe25YxR.js";import"./chevron-right-C7gLaJGV.js";import"./Input-CYczkjTf.js";import"./minus-BpmfRI-2.js";import"./spin-DWxihfUI.js";import"./error-C0JEDzZM.js";import"./withOsdkMetrics-ow7ebyRe.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
