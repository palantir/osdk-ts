import{R as i,O as M,j as y,M as v}from"./iframe-CSv4fsmn.js";import{P as D}from"./pdf-viewer-3C9dHbt_.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-C2PAuITx.js";import"./preload-helper-BQj0eB2I.js";import"./PdfRenderer-D-GX_7GE.js";import"./index-BE-whNRA.js";import"./PdfViewer-B333dyFc.js";import"./PdfViewer.module.css-D6wKV5z9.js";import"./PdfViewerAnnotationLayer-DMrgAofm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0qU4Ij0.js";import"./PdfViewerOutlineSidebar-DRuapjKJ.js";import"./PdfViewerSidebarHeader-Coysmkko.js";import"./useBaseUiId-DesniMHJ.js";import"./useControlled-_jd58WTc.js";import"./CompositeRoot-BVGz0TR6.js";import"./CompositeItem-DlMpB8Zb.js";import"./ToolbarRootContext-CpHp2HWk.js";import"./composite-DQCNq2IS.js";import"./svgIconContainer-DkmhJI17.js";import"./PdfViewerSearchBar-CAeUzye3.js";import"./chevron-up-Bjtfw9u5.js";import"./chevron-down-CiDb3tQG.js";import"./cross-ChO7d5el.js";import"./PdfViewerSidebar-Ti2g50gJ.js";import"./index-Cs7raReD.js";import"./index-D5kf7_UZ.js";import"./index-CW8NF73c.js";import"./PdfViewerToolbar-Dpm32-A9.js";import"./Button-Dz33Hx5F.js";import"./chevron-right-DNOwyi0n.js";import"./Input-oqkuNLJn.js";import"./minus-BE_E3tvR.js";import"./spin-Mvk7Uh7t.js";import"./error-CrLVp0Mu.js";import"./withOsdkMetrics-qjgH15uq.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
