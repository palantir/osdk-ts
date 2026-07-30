import{j as i}from"./iframe-ybi8g-MN.js";import{O as p}from"./object-table-Coc7uQTE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B1uLLnWr.js";import"./preload-helper-DoLTJlP_.js";import"./Table-RjJBlkAj.js";import"./index-DJSt2BGS.js";import"./Dialog-ecmTP9eK.js";import"./cross-zJrUwWQA.js";import"./svgIconContainer-BtM2uwIm.js";import"./useBaseUiId-gMA3Mt2i.js";import"./InternalBackdrop-DA3MF4OR.js";import"./composite-i3hN0MmL.js";import"./index-CqKY6TZp.js";import"./index-CTFarFys.js";import"./index-CSSPZI8i.js";import"./useEventCallback-CNnEkkjj.js";import"./SkeletonBar-DCnbTo2S.js";import"./LoadingCell-C7AG9CdZ.js";import"./ColumnConfigDialog-CO4LCoLQ.js";import"./DraggableList-BApaL5Cj.js";import"./search-BEDbo01I.js";import"./Input-WN1fL0hc.js";import"./useControlled-D4b75tUE.js";import"./isEqual-yw6Nrj7A.js";import"./isObject-BwblvIgM.js";import"./Button-CTtLrNoj.js";import"./ActionButton-BDp-zwWA.js";import"./Checkbox-B3QmkPwK.js";import"./useValueChanged-DN7PoCRc.js";import"./CollapsiblePanel-D-Ucybfz.js";import"./MultiColumnSortDialog-Ck4Z4ram.js";import"./MenuTrigger-BMf5J6LT.js";import"./CompositeItem-CZi4achz.js";import"./ToolbarRootContext-CbOW3W23.js";import"./getDisabledMountTransitionStyles-B3Fsx6x5.js";import"./getPseudoElementBounds-Cuw1SahM.js";import"./chevron-down-Cr7agNhX.js";import"./index-DSQ7ED-I.js";import"./error-CFSUGaoq.js";import"./BaseCbacBanner-DHivN-4C.js";import"./makeExternalStore-GjJO6b-K.js";import"./Tooltip-CiBRsYmr.js";import"./PopoverPopup-CQJRcF5L.js";import"./toNumber-BdSYPBS3.js";import"./useOsdkClient-OR5VNbeG.js";import"./tick-D_tITafX.js";import"./DropdownField-C3htdtz2.js";import"./withOsdkMetrics-gSO0i17z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
