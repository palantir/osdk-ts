import{j as r,M as s}from"./iframe-CSMdLy_I.js";import{P as p}from"./pdf-viewer-Xm0EoZH7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCF7-oiH.js";import"./preload-helper-BCwYmOqM.js";import"./PdfViewer-yz6HaxQE.js";import"./index-DGS2fgyr.js";import"./BasePdfViewer-B_7whFjy.js";import"./BasePdfViewer.module.css-MvrbBotw.js";import"./PdfViewerAnnotationLayer-DqZZUCIm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DTd5SmEZ.js";import"./PdfViewerOutlineSidebar-DeVM8bH4.js";import"./PdfViewerSidebarHeader-BNeo_XJB.js";import"./useBaseUiId-DtXDl3EO.js";import"./useControlled-gwPjRggQ.js";import"./CompositeRoot-BUIpC0WX.js";import"./CompositeItem-CQ_4wlFD.js";import"./ToolbarRootContext-2k2UafpN.js";import"./composite-Cr1W43yt.js";import"./svgIconContainer-CrtGHbrd.js";import"./PdfViewerSearchBar-BV9tu0JU.js";import"./chevron-up-CmdegmPQ.js";import"./chevron-down-Cct1BoUi.js";import"./cross-rRwDjGT0.js";import"./PdfViewerSidebar-DsQLoajT.js";import"./index-CWmnhREc.js";import"./index-BhZRCTRM.js";import"./index-DLB3_ur9.js";import"./PdfViewerToolbar-YO17ylXr.js";import"./Button-BsIC8U9B.js";import"./chevron-right-BVl4FVbl.js";import"./Input-4tMRpSwt.js";import"./search-WBNkBZFc.js";import"./spin-CADo7wXr.js";import"./error-Duh78PLb.js";import"./withOsdkMetrics-DOaLQ3Zd.js";import"./makeExternalStore-ToHZ88Vl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
