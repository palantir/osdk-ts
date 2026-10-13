import{j as r,M as s}from"./iframe-DCKvSy3g.js";import{P as p}from"./pdf-viewer-uSMNYDe_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7ZMCQFD.js";import"./preload-helper-C9_QzmoW.js";import"./PdfViewer-CzSOS1u0.js";import"./index-CjqUtRqG.js";import"./BasePdfViewer-Bm82vQC_.js";import"./BasePdfViewer.module.css-LbC3e7Oe.js";import"./PdfViewerAnnotationLayer-AekPr7QX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JQ9lGkMe.js";import"./PdfViewerOutlineSidebar-Bt9IWyhj.js";import"./PdfViewerSidebarHeader-CQw0WEw_.js";import"./useBaseUiId-hGdClsAp.js";import"./useControlled-23Be6Ua4.js";import"./CompositeRoot-DlXDoS8m.js";import"./CompositeItem-BaLy62YM.js";import"./ToolbarRootContext-Dfcq71Kx.js";import"./composite-Bftlp7o-.js";import"./svgIconContainer-DUPiMOGt.js";import"./PdfViewerSearchBar-DkGgsaLE.js";import"./chevron-up-Bx5mSGft.js";import"./chevron-down-CQzxndpd.js";import"./cross-Bgi1b_0b.js";import"./PdfViewerSidebar-Dtu03AyF.js";import"./index-BZTMgR5k.js";import"./index-CF-VmLVs.js";import"./index-Dqoie1xV.js";import"./PdfViewerToolbar-DVNLXqhv.js";import"./Button-B8kaenDu.js";import"./chevron-right-AfPumutr.js";import"./Input-DAFKBr8O.js";import"./search-DnxSmR02.js";import"./spin-C7vL01Ul.js";import"./error-DC-QmFfK.js";import"./withOsdkMetrics-C6hFOzPu.js";import"./makeExternalStore-DhsTa73k.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
