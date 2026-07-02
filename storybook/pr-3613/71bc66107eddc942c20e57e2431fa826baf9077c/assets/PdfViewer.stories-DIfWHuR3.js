import{R as i,O as M,j as y,M as v}from"./iframe-YXA8sZf2.js";import{P as D}from"./pdf-viewer-VLlPSr6g.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-nLOTqvq6.js";import"./preload-helper-BbZxoWgu.js";import"./PdfRenderer-BGUbQPwt.js";import"./index-Dvhc_Ual.js";import"./PdfViewer-8X1i_R0D.js";import"./PdfViewer.module.css-DHwiTw34.js";import"./PdfViewerAnnotationLayer-CWXCzUjf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-rKFYXGaq.js";import"./PdfViewerOutlineSidebar-CY2ZUgPj.js";import"./PdfViewerSidebarHeader-DpalzbYf.js";import"./useBaseUiId-DzvBIhKt.js";import"./useControlled-2qyM_vP7.js";import"./CompositeRoot-DwX6kbqu.js";import"./CompositeItem-9rkDuYhF.js";import"./ToolbarRootContext-BDdl37FF.js";import"./composite--po3qHs9.js";import"./svgIconContainer-mXWoL_ON.js";import"./PdfViewerSearchBar-CRC1SxBS.js";import"./chevron-up-DJlQkfna.js";import"./chevron-down-DjrBjvP3.js";import"./cross-eT7KFiF7.js";import"./PdfViewerSidebar-KkyvYfSW.js";import"./index-mIv9kygz.js";import"./index-D7dVf2bs.js";import"./index-BOyaXysV.js";import"./PdfViewerToolbar-Dp8Bd5Pz.js";import"./Button-D4SV1QwU.js";import"./chevron-right-HfnhKAaC.js";import"./Input-BtqwlxVC.js";import"./minus-CMkvhA4f.js";import"./search-BQODvkCZ.js";import"./spin-DQkbOXuK.js";import"./error-DxL-Zrkb.js";import"./withOsdkMetrics-CDbdP1ws.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
