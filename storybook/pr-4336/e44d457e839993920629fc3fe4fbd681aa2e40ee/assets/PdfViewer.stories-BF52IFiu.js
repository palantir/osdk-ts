import{j as r,M as s}from"./iframe-BTvYIEq8.js";import{P as p}from"./pdf-viewer-DksIAH2C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-im4dUnez.js";import"./preload-helper-CFYdII7P.js";import"./PdfViewer-CPmn4qyJ.js";import"./index-Beef_kHp.js";import"./BasePdfViewer-DapjZ82J.js";import"./BasePdfViewer.module.css-CapzdlJt.js";import"./PdfViewerAnnotationLayer-DPkd5xJI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BsFvjEjl.js";import"./PdfViewerOutlineSidebar-CJ1Ud837.js";import"./PdfViewerSidebarHeader-vYRZAZ4E.js";import"./useBaseUiId-DVwPqKHc.js";import"./useControlled-CpfYcIbT.js";import"./CompositeRoot-Dv6uAAoY.js";import"./CompositeItem-nLfGi46c.js";import"./ToolbarRootContext-U5RtpmpZ.js";import"./composite-UnbXp0a2.js";import"./svgIconContainer-CDJ2X3CN.js";import"./PdfViewerSearchBar-CZXTtXVQ.js";import"./chevron-up-B6CDvaW8.js";import"./chevron-down-Bkejrg-1.js";import"./cross-sKht6Kec.js";import"./PdfViewerSidebar-DUJBjiO8.js";import"./index-DyutDDDZ.js";import"./index-BVCWAs35.js";import"./index-CHR8y95E.js";import"./PdfViewerToolbar-Jd01W2rF.js";import"./Button-EZBekNYG.js";import"./chevron-right-DM5Z1FNl.js";import"./Input-WD0q61A7.js";import"./search-Dy8Cjq17.js";import"./spin-Be8MU2sm.js";import"./error-ByI-eSLJ.js";import"./withOsdkMetrics-BCNSh7gL.js";import"./makeExternalStore-B8YeuVYn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
