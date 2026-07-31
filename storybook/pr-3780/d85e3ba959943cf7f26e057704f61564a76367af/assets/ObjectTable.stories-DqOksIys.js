import{j as i}from"./iframe-nm7eIgX9.js";import{O as p}from"./object-table-B6mNHRMH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CRn4-uB-.js";import"./preload-helper-xnNK-q7j.js";import"./Table-yFRUIBYc.js";import"./index-CL6V_FJD.js";import"./Dialog-D1YDlBya.js";import"./cross-CH8L4sxq.js";import"./svgIconContainer-C62k5sq7.js";import"./useBaseUiId-DBJaT0Wa.js";import"./InternalBackdrop-7d0XW0Cg.js";import"./composite-ClirUg7p.js";import"./index-ClI1wKdU.js";import"./index-C9RhWig-.js";import"./index-D7PRq_DM.js";import"./useEventCallback-BgBKpXww.js";import"./SkeletonBar-fq6nNB61.js";import"./LoadingCell-DvFlUa2I.js";import"./ColumnConfigDialog-Cue7xcis.js";import"./DraggableList-DqOpTakn.js";import"./search-CLOlj8c_.js";import"./Input-cZWR-4H8.js";import"./useControlled-BGjTzEiM.js";import"./isEqual-e9TZvkud.js";import"./isObject-D2gBWA7W.js";import"./Button-BEdWrE0m.js";import"./ActionButton-YFxN7Dhh.js";import"./Checkbox-DrR4uRxm.js";import"./useValueChanged-BWtlsxVl.js";import"./CollapsiblePanel-DnkSQ8qM.js";import"./MultiColumnSortDialog-qA4xo1Ms.js";import"./MenuTrigger-x3aXd9J2.js";import"./CompositeItem-yDyDoF89.js";import"./ToolbarRootContext-7ilHDKSN.js";import"./getDisabledMountTransitionStyles-Cps7_QV-.js";import"./getPseudoElementBounds-er0igS0G.js";import"./chevron-down-CWzDP1O4.js";import"./index-CHK_BJAR.js";import"./error-BXtnxwmG.js";import"./BaseCbacBanner-C8IkGo1W.js";import"./makeExternalStore-Cl341ALS.js";import"./Tooltip-DuL7FNde.js";import"./PopoverPopup-DPv6nHd9.js";import"./toNumber-DaDCBP4c.js";import"./useOsdkClient-B4QMJphH.js";import"./tick-6fv99-OX.js";import"./DropdownField-B_uTfwAo.js";import"./withOsdkMetrics-NfqQgt5n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
