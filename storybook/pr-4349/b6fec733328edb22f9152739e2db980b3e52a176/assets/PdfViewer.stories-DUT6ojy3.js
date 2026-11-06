import{j as r,M as s}from"./iframe-6rmEYQ4q.js";import{P as p}from"./pdf-viewer-BWipRkbh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BSbBhhu7.js";import"./preload-helper-CQFwNwom.js";import"./PdfViewer-B2nRTFcE.js";import"./index-DHYmSSVn.js";import"./BasePdfViewer-JPBfqmlv.js";import"./BasePdfViewer.module.css-DN5kEU0Y.js";import"./PdfViewerAnnotationLayer-Cm_m0udu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Btk5S2Zb.js";import"./PdfViewerOutlineSidebar-CScB4EZJ.js";import"./PdfViewerSidebarHeader-BwT2O6E-.js";import"./useBaseUiId-DutMLbwr.js";import"./useControlled-HeurI7_b.js";import"./CompositeRoot-gNHx4QdY.js";import"./CompositeItem-DuBtWhAd.js";import"./ToolbarRootContext-4ImLkhxO.js";import"./composite-6RMh68ZK.js";import"./svgIconContainer-BTOejcjp.js";import"./PdfViewerSearchBar-CRfY283W.js";import"./chevron-up-D9NgL-aI.js";import"./chevron-down-DJM0Z3o9.js";import"./cross-D-Hg8nzG.js";import"./PdfViewerSidebar-DBhq-Bin.js";import"./index-O1VLMwtD.js";import"./index-DTFmmgtm.js";import"./index--7GUs8pc.js";import"./PdfViewerToolbar-pM55WNmF.js";import"./Button-B5wqsid8.js";import"./chevron-right-DMzaZBoI.js";import"./Input-DHCuHilz.js";import"./search-BHn0KTJN.js";import"./spin-BrzpPv5V.js";import"./error-D2aG_W_b.js";import"./withOsdkMetrics-23-xBZ5M.js";import"./makeExternalStore-D4L5Wrb5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
