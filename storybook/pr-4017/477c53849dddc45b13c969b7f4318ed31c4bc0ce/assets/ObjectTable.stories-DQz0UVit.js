import{j as i}from"./iframe-vnKEgnca.js";import{O as p}from"./object-table-Cdqb0T8o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D__NCSdn.js";import"./preload-helper-sQW1CADx.js";import"./Table-jIMLYzem.js";import"./index-BeGfthlJ.js";import"./Dialog-CeIQS-Df.js";import"./cross-_8csVoP1.js";import"./svgIconContainer-NsUuck07.js";import"./useBaseUiId-CgxqfjcM.js";import"./InternalBackdrop-83r7I1RI.js";import"./composite-C9k3QAIL.js";import"./index-fmSw06oW.js";import"./index-CFCh4JjT.js";import"./index-CcuQRhTx.js";import"./useEventCallback-Dfml-rlK.js";import"./SkeletonBar-Dk4nJLO-.js";import"./LoadingCell-rXcdd4XO.js";import"./ColumnConfigDialog-CzA6lYEA.js";import"./DraggableList-BtqsKkmI.js";import"./search-DSYVPSfx.js";import"./Input-CWIjEhtY.js";import"./useControlled-Bxc3bdV1.js";import"./Button-28NdSEt3.js";import"./small-cross-CUYeKhnX.js";import"./ActionButton-D-nwGdVx.js";import"./Checkbox-DawziPMY.js";import"./useValueChanged-CDaiOFJe.js";import"./CollapsiblePanel-snp8kNHN.js";import"./MultiColumnSortDialog-Bata7hBa.js";import"./MenuTrigger-DIYp-ZLj.js";import"./CompositeItem-1_Yzr1XW.js";import"./ToolbarRootContext-CwAo2bG9.js";import"./getDisabledMountTransitionStyles-BwHnrPvs.js";import"./getPseudoElementBounds-CHJP1wr0.js";import"./chevron-down-DEu7XuhT.js";import"./index-BvRjSpJH.js";import"./error-BV36DzgX.js";import"./BaseCbacBanner-Dyqd2qNr.js";import"./makeExternalStore-CcMSZMO7.js";import"./Tooltip-Cj_Idruq.js";import"./PopoverPopup-BTMMw79y.js";import"./debounce-D-YcwjSi.js";import"./useOsdkClient-3N-DZ2Jr.js";import"./tick-0FUkR9Gc.js";import"./DropdownField-VOlhddjk.js";import"./isEqual-DUuBLzE6.js";import"./withOsdkMetrics-Dh0bq2dQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
