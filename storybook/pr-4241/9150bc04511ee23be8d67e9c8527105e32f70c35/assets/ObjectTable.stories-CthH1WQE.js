import{j as i}from"./iframe-81je18Ik.js";import{O as p}from"./object-table-BvQWIhZK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DHwI9FkS.js";import"./preload-helper-CRAEXExV.js";import"./Table-CATOd2mE.js";import"./index-Ch4IN5aI.js";import"./Dialog-bzSxmtfs.js";import"./cross-Cc4GvHBG.js";import"./svgIconContainer-CkaRT57i.js";import"./useBaseUiId-BZJB2Tlb.js";import"./InternalBackdrop-C65WwkrS.js";import"./composite-B4jPeedW.js";import"./index-F2YzzidU.js";import"./index-CJX1bs1L.js";import"./index-CbMHVh08.js";import"./useEventCallback-DQ9am-6U.js";import"./SkeletonBar-Dw-ewOea.js";import"./LoadingCell-D0Zburhd.js";import"./ColumnConfigDialog-Cet9ZvNQ.js";import"./DraggableList-5Ave0405.js";import"./search-DL20J9IV.js";import"./Input-Dw0afNfi.js";import"./useControlled-B3eKfZiB.js";import"./Button-DMrFAQQL.js";import"./small-cross-Bkj0uCyB.js";import"./ActionButton-B6EeJUTi.js";import"./Checkbox-BvqadCb6.js";import"./useValueChanged-CSH2H_LU.js";import"./CollapsiblePanel-BZXNDPDr.js";import"./MultiColumnSortDialog-C9gRh8VL.js";import"./MenuTrigger-BtxN9ewG.js";import"./CompositeItem-CGRjueKi.js";import"./ToolbarRootContext-Bevviuy2.js";import"./getDisabledMountTransitionStyles-Baxpj6ZK.js";import"./getPseudoElementBounds-CsA6tpz4.js";import"./chevron-down-ea9DRGVa.js";import"./index-BZr2ycyZ.js";import"./error-v2_eLjNd.js";import"./BaseCbacBanner-DH9rtQ5g.js";import"./makeExternalStore-C42KheMu.js";import"./Tooltip-ZUJ8p7GH.js";import"./PopoverPopup-CJ53N5Gn.js";import"./debounce-C0dFA0mS.js";import"./useOsdkClient-DOUL53LR.js";import"./tick-C3zDCHaR.js";import"./DropdownField-_ZfRXRml.js";import"./isEqual-DOga7zoS.js";import"./withOsdkMetrics-DpvfaYrl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
