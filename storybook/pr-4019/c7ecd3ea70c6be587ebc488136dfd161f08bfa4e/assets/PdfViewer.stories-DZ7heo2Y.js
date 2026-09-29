import{j as r,M as s}from"./iframe-1Dw8hxFb.js";import{P as p}from"./pdf-viewer-KV3UF3Td.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2rlnpPyH.js";import"./preload-helper-CV62D7uV.js";import"./PdfViewer-UI7PbdK2.js";import"./index-BA__U3Gv.js";import"./BasePdfViewer-B44iBfKb.js";import"./BasePdfViewer.module.css-DJe1C-pP.js";import"./PdfViewerAnnotationLayer-hbhe-V5A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEv9qqZ2.js";import"./PdfViewerOutlineSidebar-DQFIEel6.js";import"./PdfViewerSidebarHeader-Clpy3u5l.js";import"./useBaseUiId-D9Uc1gUI.js";import"./useControlled-BPQdQUzw.js";import"./CompositeRoot-Td0rk9fp.js";import"./CompositeItem-wJjKayF5.js";import"./ToolbarRootContext-DY2ntbcg.js";import"./composite-DMMpwO4Y.js";import"./svgIconContainer-D7jaIK1U.js";import"./PdfViewerSearchBar-Cd-97TFa.js";import"./chevron-up-TnAUDv3K.js";import"./chevron-down-CctmHm9l.js";import"./cross-D8760vWj.js";import"./PdfViewerSidebar-jzYGply_.js";import"./index-C6j9YUgP.js";import"./index-Bk6hiZ0z.js";import"./index-FZsLUXa_.js";import"./PdfViewerToolbar-D10U-t-G.js";import"./Button-Dz_i3O8s.js";import"./chevron-right-3aiC4Bh2.js";import"./Input-DAIYzExG.js";import"./search-D_WMSsbB.js";import"./spin-C3lvdvM-.js";import"./error-CQRvTwte.js";import"./withOsdkMetrics-DttttaWM.js";import"./makeExternalStore-BxvWPf6c.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
