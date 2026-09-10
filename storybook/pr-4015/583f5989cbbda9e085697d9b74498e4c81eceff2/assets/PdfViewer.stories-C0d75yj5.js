import{j as r,M as s}from"./iframe-DXJ7n1Mt.js";import{P as p}from"./pdf-viewer-DVsQXvsZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-0ZjFRAZz.js";import"./preload-helper-J-T-Ktwt.js";import"./PdfViewer-DM7gPnoH.js";import"./index-BI3hFpTv.js";import"./BasePdfViewer-BRCtVRul.js";import"./BasePdfViewer.module.css-BK0bj1-W.js";import"./PdfViewerAnnotationLayer-BN_q3emr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2WJ5D3J.js";import"./PdfViewerOutlineSidebar-BqtkRaA2.js";import"./PdfViewerSidebarHeader-DeNZYcNC.js";import"./useBaseUiId-CYKekcVM.js";import"./useControlled-DcXpzJX2.js";import"./CompositeRoot--ANGT57v.js";import"./CompositeItem-Btxqtw0m.js";import"./ToolbarRootContext-CBBxIG3X.js";import"./composite-Br3qqN8V.js";import"./svgIconContainer-Cy-yvyP2.js";import"./PdfViewerSearchBar-BHuUo5H4.js";import"./chevron-up-BbxW0_MZ.js";import"./chevron-down-zhZwP9mu.js";import"./cross-DmSTTtGj.js";import"./PdfViewerSidebar-DW-D2bFp.js";import"./index-CP1UTh8c.js";import"./index-q7aE4fUG.js";import"./index-_EiW5ygO.js";import"./PdfViewerToolbar-0zYcLcKo.js";import"./Button-B1cldSa1.js";import"./chevron-right-CC1T4BaJ.js";import"./Input-Cdu0Ne1b.js";import"./search-CS5luSCI.js";import"./spin-BfGfluxP.js";import"./error-9QZoIHyb.js";import"./withOsdkMetrics-AS-zNNJp.js";import"./makeExternalStore-BQUk64un.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
