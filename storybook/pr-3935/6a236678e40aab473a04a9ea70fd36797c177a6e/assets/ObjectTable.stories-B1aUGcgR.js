import{j as i}from"./iframe-SRRO8i30.js";import{O as p}from"./object-table-CmPrXxaI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DfpCkPcY.js";import"./preload-helper-NPyRSWZ_.js";import"./Table-Dy8AtMUu.js";import"./index-DPLSpa0G.js";import"./Dialog-CSzPqIC3.js";import"./cross-jyQgcZ52.js";import"./svgIconContainer-D3SUPO2O.js";import"./useBaseUiId-8g00ulSi.js";import"./InternalBackdrop-BdDgGwHo.js";import"./composite-B29UKLrp.js";import"./index-C3IHmxZW.js";import"./index-CXi1lZFs.js";import"./index-DjLnHXAX.js";import"./useEventCallback-B5jYv6w5.js";import"./SkeletonBar-r5KpeDyu.js";import"./LoadingCell-B9b2xaD4.js";import"./ColumnConfigDialog-CMnViZr7.js";import"./DraggableList-DEWPd_9E.js";import"./search-Dwq18lHC.js";import"./Input-1ZE3LQ1g.js";import"./useControlled-ClmtJZxj.js";import"./Button-DYyi-OV6.js";import"./small-cross-Di-7UDqX.js";import"./ActionButton-mBOnt8AS.js";import"./Checkbox-Cp1jAqlX.js";import"./useValueChanged-D37_JNWO.js";import"./CollapsiblePanel-C0JW29Ik.js";import"./MultiColumnSortDialog-CluiCg7I.js";import"./MenuTrigger-D4ZP19d1.js";import"./CompositeItem-C-s0XknV.js";import"./ToolbarRootContext-CAXfGmDY.js";import"./getDisabledMountTransitionStyles-DmV333RI.js";import"./getPseudoElementBounds-DX48WjZL.js";import"./chevron-down-CG5p7RNd.js";import"./index-BAxp49FW.js";import"./error-Dr6abEJ3.js";import"./BaseCbacBanner-B5qWK0NP.js";import"./makeExternalStore-BSLUfzC5.js";import"./Tooltip-CLn2UIDD.js";import"./PopoverPopup-CE0QOG7r.js";import"./debounce-CmPQ0Jr_.js";import"./useOsdkClient-D_qW_3G5.js";import"./tick-Cn4oMacM.js";import"./DropdownField-DuDh3jGB.js";import"./isEqual-B1aIPHpz.js";import"./withOsdkMetrics-B4tyiiTI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
