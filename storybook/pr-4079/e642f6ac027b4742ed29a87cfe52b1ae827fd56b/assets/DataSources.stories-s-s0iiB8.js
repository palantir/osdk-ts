import{j as r}from"./iframe-C-JZ09HL.js";import{O as b}from"./object-table-eCdmFUXr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-_c3d8Q.js";import{u as g}from"./useOsdkClient-w30RoI3v.js";import"./preload-helper-Btqf0-MW.js";import"./Table-DMQ_nPm6.js";import"./index-BXkYmYaL.js";import"./Dialog-CWLeV2jh.js";import"./cross-CDvt64dz.js";import"./svgIconContainer-GnFqEV7J.js";import"./useBaseUiId-C6m1fY6X.js";import"./InternalBackdrop-DgDyp4Vo.js";import"./composite-BHrzkL3j.js";import"./index-B9W8VWla.js";import"./index-CWTT4E5c.js";import"./index-DyndQNLM.js";import"./useEventCallback-Is75DRLj.js";import"./SkeletonBar-DHUwfY6j.js";import"./LoadingCell-pQiUA7Bk.js";import"./ColumnConfigDialog-B7EAN3Um.js";import"./DraggableList-CxlXcFDc.js";import"./search-CRF0d4U_.js";import"./Input-9fM_pp7v.js";import"./useControlled-BnCuZsdw.js";import"./Button-DnUlyK7a.js";import"./small-cross-CQkeoWBO.js";import"./ActionButton-8JqznqV-.js";import"./Checkbox-DPup6C7p.js";import"./useValueChanged-hvB4Sogv.js";import"./CollapsiblePanel-BEbz9zc7.js";import"./MultiColumnSortDialog-qFPV76Nw.js";import"./MenuTrigger-C36tHorX.js";import"./CompositeItem-1x61Rlw0.js";import"./ToolbarRootContext-CcljaRm4.js";import"./getDisabledMountTransitionStyles-BaR3xwN0.js";import"./getPseudoElementBounds-DEDKJbcP.js";import"./chevron-down-l-lKjlka.js";import"./index-DKkkLjbn.js";import"./error-jL4dzDGt.js";import"./BaseCbacBanner-CWi2u_SR.js";import"./makeExternalStore-CHVbKC8p.js";import"./Tooltip-By6nOBFb.js";import"./PopoverPopup-tZcqIDwv.js";import"./debounce-DuRZaOgZ.js";import"./tick-BF72g7TU.js";import"./DropdownField-VLHRRTtJ.js";import"./isEqual-D6XdnbH2.js";import"./withOsdkMetrics-Das8js_L.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
