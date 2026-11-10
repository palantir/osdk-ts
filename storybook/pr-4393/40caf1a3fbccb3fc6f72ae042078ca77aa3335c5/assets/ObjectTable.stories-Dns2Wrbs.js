import{j as i}from"./iframe-CfbjiUO2.js";import{O as p}from"./object-table-0X7ZW0yx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPF5q57T.js";import"./preload-helper-9qFOutGb.js";import"./Table-Cq3Sqb6_.js";import"./index-DhEKv3k8.js";import"./Dialog-CdVAhUr7.js";import"./cross-CDv3c9ZT.js";import"./svgIconContainer-n1-XLaqe.js";import"./useBaseUiId-KkzZtg6c.js";import"./InternalBackdrop-Cj0yGS8w.js";import"./composite-BLsaDnsq.js";import"./index-DeN7WaWx.js";import"./index-Cdt2HnwD.js";import"./index-Vop21I5L.js";import"./useEventCallback-AK_04X0m.js";import"./SkeletonBar-o0aOuB0t.js";import"./LoadingCell-DnqoRZAo.js";import"./ColumnConfigDialog-oUPR49Lo.js";import"./DraggableList-BHuI1GyK.js";import"./search-BvtxNbE5.js";import"./Input-C6r2dONX.js";import"./useControlled-NF1yqRGY.js";import"./Button-BVuGahtR.js";import"./small-cross-CUl6D4zD.js";import"./ActionButton-Dc4Qt7pU.js";import"./Checkbox-YLRlOnRM.js";import"./useValueChanged-Bsmvo0qV.js";import"./CollapsiblePanel-B5IJejoA.js";import"./MultiColumnSortDialog-Dkz6CRLS.js";import"./MenuTrigger-DWA6dgqe.js";import"./CompositeItem-CXj7-nx_.js";import"./ToolbarRootContext-DEszTe9o.js";import"./getDisabledMountTransitionStyles-ApLJ3Lvx.js";import"./getPseudoElementBounds-C6fv_0nX.js";import"./chevron-down-7jPpylX5.js";import"./index-Bv3dL3pD.js";import"./error-CdqVFWE7.js";import"./BaseCbacBanner-Cnu_4zKu.js";import"./makeExternalStore-bIg36UO0.js";import"./Tooltip-79oqwAuG.js";import"./PopoverPopup-Bb7fveQO.js";import"./debounce-aqSqiTwE.js";import"./useOsdkClient-Cth9whbI.js";import"./tick-CrjnM-Na.js";import"./DropdownField-C41H6ZVs.js";import"./isEqual-3dKwApqB.js";import"./withOsdkMetrics-1iZQrA2_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
