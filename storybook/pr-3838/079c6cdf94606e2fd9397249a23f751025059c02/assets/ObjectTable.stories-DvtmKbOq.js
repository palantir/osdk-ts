import{j as i}from"./iframe-CIVlBFCn.js";import{O as p}from"./object-table-D9Q_ikSF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BSieANlz.js";import"./preload-helper-B6mYsaJc.js";import"./Table-DZBaYXbE.js";import"./index-BQi6Abil.js";import"./Dialog-xUS2tuQU.js";import"./cross-D3bCQtqo.js";import"./svgIconContainer-1xBmK96Z.js";import"./useBaseUiId-Cyj56q5H.js";import"./InternalBackdrop-DDm_FHmN.js";import"./composite-Bp56YB0B.js";import"./index-CUBWxZlW.js";import"./index-CzaD-4Ts.js";import"./index-BHI7pjla.js";import"./useEventCallback-s8yM6zjT.js";import"./SkeletonBar-BYr110DW.js";import"./LoadingCell-BMFZr-G_.js";import"./ColumnConfigDialog-Bgzo5-pn.js";import"./DraggableList-DsASwHWG.js";import"./search-Cs4QzOir.js";import"./Input-Cvm-JmhM.js";import"./useControlled-CGspBM4Z.js";import"./isEqual-B4LCJh2e.js";import"./isObject-YbzMoxWR.js";import"./Button-BpMxh17E.js";import"./ActionButton-BW0Xstv0.js";import"./Checkbox-CiKvPBAD.js";import"./useValueChanged-DgcMUDnw.js";import"./CollapsiblePanel-CSoVN7zS.js";import"./MultiColumnSortDialog-CCNrU_89.js";import"./MenuTrigger-_NRYxiNX.js";import"./CompositeItem-BwbcMQJX.js";import"./ToolbarRootContext-DdrEfg7p.js";import"./getDisabledMountTransitionStyles-B-twLb_7.js";import"./getPseudoElementBounds-BiDP8mSE.js";import"./chevron-down-CtlSujAB.js";import"./index-Drqb8xJR.js";import"./error-CX8PxqwS.js";import"./BaseCbacBanner-B3OlMvKT.js";import"./makeExternalStore-C4HMHwO7.js";import"./Tooltip-DGd1zXdA.js";import"./PopoverPopup-C4GCHSK8.js";import"./toNumber-CsHgPj-_.js";import"./useOsdkClient-DWpCnDKc.js";import"./tick-DRN1ubyg.js";import"./DropdownField-DD8jwakx.js";import"./withOsdkMetrics-DGOG8EuQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
