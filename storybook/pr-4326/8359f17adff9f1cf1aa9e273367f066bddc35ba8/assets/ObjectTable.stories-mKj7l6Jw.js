import{j as i}from"./iframe-B6Lta6LP.js";import{O as p}from"./object-table-HO2pwWul.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CdBhTDoM.js";import"./preload-helper-CYbl2xdJ.js";import"./Table-Ct_buXIn.js";import"./index-tKxTuoVH.js";import"./Dialog-ByWbVagS.js";import"./cross-CAJFEHXr.js";import"./svgIconContainer-DPd9W8TR.js";import"./useBaseUiId-LeTLb_RS.js";import"./InternalBackdrop-CD_hYGA0.js";import"./composite-CXu030fZ.js";import"./index-DW8Y-83r.js";import"./index-C1Xd9eEP.js";import"./index-SAyxKn2n.js";import"./useEventCallback-CFBWhOz1.js";import"./SkeletonBar-CBfyp1TB.js";import"./LoadingCell-CtPX3UjT.js";import"./ColumnConfigDialog-CP4zGZfj.js";import"./DraggableList-Cigjyxxm.js";import"./search-CJ2Z9OiI.js";import"./Input-CNTN6kGr.js";import"./useControlled-Db4l5j0n.js";import"./Button-CDP0EtTw.js";import"./small-cross-CYXu3PwF.js";import"./ActionButton-CjKN-LnI.js";import"./Checkbox-Ch2RRzT2.js";import"./useValueChanged-Beo3vz_X.js";import"./CollapsiblePanel-C3KmqiQ1.js";import"./MultiColumnSortDialog-FC3kYSVd.js";import"./MenuTrigger-CEQn7r1g.js";import"./CompositeItem-aYCSoUde.js";import"./ToolbarRootContext-BwcsMBBX.js";import"./getDisabledMountTransitionStyles-dUaBn5kl.js";import"./getPseudoElementBounds-Cie9YPdh.js";import"./chevron-down-DP_Haie7.js";import"./index-BIznb_cm.js";import"./error-B_rV--z6.js";import"./BaseCbacBanner-BQ6d8Rvc.js";import"./makeExternalStore-BxbrneS1.js";import"./Tooltip-C9QEBkZZ.js";import"./PopoverPopup-Crm0F1MF.js";import"./debounce-DcTWGXcx.js";import"./useOsdkClient-LIxqnJR5.js";import"./tick-CR4FCYn3.js";import"./DropdownField-IaATl85X.js";import"./isEqual-DX8PeEAn.js";import"./withOsdkMetrics-D256mKJK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
