import{j as i}from"./iframe-DL6bhntV.js";import{O as p}from"./object-table-CKdJoKQA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CLI-t_h1.js";import"./preload-helper-Bzx1Zh_S.js";import"./Table-RqC9D474.js";import"./index-B8ftOcx-.js";import"./Dialog-9nwm2v7g.js";import"./cross-DyIDhlr1.js";import"./svgIconContainer-DSWQOkNx.js";import"./useBaseUiId-llhhqJOe.js";import"./InternalBackdrop-Bkvjmy8r.js";import"./composite-BF5DU4SU.js";import"./index-Bs7nlaiS.js";import"./index-DJ4ha6JU.js";import"./index-D_yYkCV1.js";import"./useEventCallback-CBeRn_5S.js";import"./SkeletonBar-DVq5tV_s.js";import"./LoadingCell-Ct-8OoY3.js";import"./ColumnConfigDialog-D4KL29wS.js";import"./DraggableList-OOuzfX9H.js";import"./search-DfezW5-F.js";import"./Input-BPBmB1lT.js";import"./useControlled-DiqKmz4m.js";import"./Button-B0CnBgjK.js";import"./small-cross-BUQz1fKF.js";import"./ActionButton-BzrCCI4n.js";import"./Checkbox-lnE4-5VB.js";import"./useValueChanged-CDlkl3OD.js";import"./CollapsiblePanel-DoYVi0Of.js";import"./MultiColumnSortDialog-Ddp0c38Q.js";import"./MenuTrigger-wuUZ3pYU.js";import"./CompositeItem-Bp1V_qz6.js";import"./ToolbarRootContext-CvpBNR1-.js";import"./getDisabledMountTransitionStyles-CUMX81wn.js";import"./getPseudoElementBounds-vxtOSGfI.js";import"./chevron-down-B213Fcrt.js";import"./index-DteBpDZt.js";import"./error-BD8Fuc9b.js";import"./BaseCbacBanner-DBz0MOp-.js";import"./makeExternalStore-OJ90FHcV.js";import"./Tooltip-CpYMs0DP.js";import"./PopoverPopup-CS8wg6vA.js";import"./debounce-B_yVPQMd.js";import"./useOsdkClient-7LhcF-kZ.js";import"./tick-BHAOkmD3.js";import"./DropdownField-DNbepfr2.js";import"./isEqual-pvfu54a5.js";import"./withOsdkMetrics-D6wPv70n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
