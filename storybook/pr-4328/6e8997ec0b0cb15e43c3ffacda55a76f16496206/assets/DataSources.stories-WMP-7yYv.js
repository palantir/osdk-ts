import{j as r}from"./iframe-Dhwk5ITi.js";import{O as b}from"./object-table-BJqi85zj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DeFEJKYA.js";import{u as g}from"./useOsdkClient-Cu4fdH1j.js";import"./preload-helper-DXH7Ji2G.js";import"./Table-DXVv-Xkz.js";import"./index-CqrX2hSZ.js";import"./Dialog-D7ArHBQX.js";import"./cross-BCTjTq5q.js";import"./svgIconContainer-DRo39Sdm.js";import"./useBaseUiId-CN9ap6QA.js";import"./InternalBackdrop-B16TXcDZ.js";import"./composite-Q4thQ8nQ.js";import"./index-Dqvhhr9j.js";import"./index-CQyEu1u7.js";import"./index-D-uqDeUc.js";import"./useEventCallback-CtBf5HaK.js";import"./SkeletonBar-BNjj6R1f.js";import"./LoadingCell-B1AXdpYe.js";import"./ColumnConfigDialog-Biqiolfe.js";import"./DraggableList-B-RBDkIm.js";import"./search-Be1zlQKz.js";import"./Input-BHNHysVZ.js";import"./useControlled-BzFCle-k.js";import"./Button-DQ5CRvak.js";import"./small-cross-BCB9roFn.js";import"./ActionButton-BKUAvIZF.js";import"./Checkbox-CGwy-5-U.js";import"./useValueChanged-BE0789MN.js";import"./CollapsiblePanel-DYfViWWc.js";import"./MultiColumnSortDialog-COFC3sIH.js";import"./MenuTrigger-BUD57go2.js";import"./CompositeItem-fUd5V9Oq.js";import"./ToolbarRootContext-tq1uYlSQ.js";import"./getDisabledMountTransitionStyles-DrXurUP0.js";import"./getPseudoElementBounds-BrIYTXPl.js";import"./chevron-down-Bi9ECMIR.js";import"./index-CTvXLxpd.js";import"./error--SrXy3UU.js";import"./BaseCbacBanner-DHZ3DNXo.js";import"./makeExternalStore-3kaAWetO.js";import"./Tooltip-B-otFcUC.js";import"./isObject-COnjlVPb.js";import"./debounce-D0JC05Tw.js";import"./tick-cIKEoG11.js";import"./DropdownField-CNKhRnuu.js";import"./isEqual-BJTmeTes.js";import"./_baseIsEqual-_JiTCUc9.js";import"./withOsdkMetrics-Cikn35t1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
