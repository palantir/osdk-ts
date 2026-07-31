import{j as i}from"./iframe-BAGpRzfr.js";import{O as p}from"./object-table-CqU5kZAu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DqFVmka6.js";import"./preload-helper-Corf789j.js";import"./Table-CVoZnPC3.js";import"./index-Ga7CUyAH.js";import"./Dialog-v_BWNC40.js";import"./cross-CB_xYTlG.js";import"./svgIconContainer-sR-3_vAH.js";import"./useBaseUiId-D8Vsok84.js";import"./InternalBackdrop-CsXznWYg.js";import"./composite-sMcVC9eI.js";import"./index-DxphW_No.js";import"./index-BStldZKH.js";import"./index-B8zqjF6f.js";import"./useEventCallback-CN3xEPfj.js";import"./SkeletonBar-ry2J50tn.js";import"./LoadingCell-B_Ni_uW1.js";import"./ColumnConfigDialog-B_FC0Vsr.js";import"./DraggableList-Co8wUlcQ.js";import"./search-Cim2wrYi.js";import"./Input-CkPyvI53.js";import"./useControlled-DQLWPkxR.js";import"./isEqual-lxxQSSAF.js";import"./isObject-Aecr_3gI.js";import"./Button-B1tJprBL.js";import"./ActionButton-B67UkNc-.js";import"./Checkbox-B-ORbkA4.js";import"./useValueChanged-CRXfWOv_.js";import"./CollapsiblePanel-T8rH8p23.js";import"./MultiColumnSortDialog-BlYuvWVv.js";import"./MenuTrigger-CR4GKjR5.js";import"./CompositeItem-R8h4HgYz.js";import"./ToolbarRootContext-BadKTZpQ.js";import"./getDisabledMountTransitionStyles-DzNx5AQ3.js";import"./getPseudoElementBounds-CA6Nf5Lc.js";import"./chevron-down-CPue3q8s.js";import"./index-BlZ0oTgw.js";import"./error-Cx7q6m8o.js";import"./BaseCbacBanner-DqWX9lKa.js";import"./makeExternalStore-DHV-TvQm.js";import"./Tooltip-spHLb7Fa.js";import"./PopoverPopup-eQZY-6cr.js";import"./toNumber-EdrbkC3p.js";import"./useOsdkClient-DBaDAOAn.js";import"./tick-CNjS5V3e.js";import"./DropdownField-59XRT8Mk.js";import"./withOsdkMetrics-DboyezXq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
