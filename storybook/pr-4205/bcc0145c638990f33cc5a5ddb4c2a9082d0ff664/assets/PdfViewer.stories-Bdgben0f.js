import{j as r,M as s}from"./iframe-Dmb-mlzV.js";import{P as p}from"./pdf-viewer-X0aGFaZ0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBT2Pm7Q.js";import"./preload-helper-MIGgaMld.js";import"./PdfViewer-BxYH-CCA.js";import"./index-Ds3o4atQ.js";import"./BasePdfViewer-BzJtNGow.js";import"./BasePdfViewer.module.css-CCWNBMdg.js";import"./PdfViewerAnnotationLayer-Oo5jtBgM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfIcRT5q.js";import"./PdfViewerOutlineSidebar-DHA29xSO.js";import"./PdfViewerSidebarHeader-C38WX3pN.js";import"./useBaseUiId-Bl-3cYCN.js";import"./useControlled-BM7SnBgs.js";import"./CompositeRoot-DjAH1BTs.js";import"./CompositeItem-BWXXLF3M.js";import"./ToolbarRootContext-pJcR2hxd.js";import"./composite-6EKatbQT.js";import"./svgIconContainer-DAFeyB5Y.js";import"./PdfViewerSearchBar-CNnIt4_5.js";import"./chevron-up-BvfLEj3k.js";import"./chevron-down-BZ7oFKmu.js";import"./cross-_swrXFsE.js";import"./PdfViewerSidebar-D6ELzOM7.js";import"./index-DZas1VAi.js";import"./index-CP5aixwn.js";import"./index-qj8WLeK2.js";import"./PdfViewerToolbar-df08pbyb.js";import"./Button-8xVTVGsk.js";import"./chevron-right-bbc-ykJd.js";import"./Input-CBzkX4z8.js";import"./search-DMyFpELI.js";import"./spin-Cpe5fPBT.js";import"./error-XRi8aH0l.js";import"./withOsdkMetrics-CiUTqFkS.js";import"./makeExternalStore-gkjC6p4e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
