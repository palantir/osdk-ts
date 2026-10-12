import{j as i}from"./iframe-0F7DfPLe.js";import{O as p}from"./object-table-C_o6_U1k.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DXcBi09i.js";import"./preload-helper-6mO-KnDD.js";import"./Table-TSXH1iBc.js";import"./index-Djr_Jop1.js";import"./Dialog-DMahry3k.js";import"./cross-BVUsmn4r.js";import"./svgIconContainer-DTCoh7Fd.js";import"./useBaseUiId-SJpz-dQs.js";import"./InternalBackdrop-B1m6j3HH.js";import"./composite-DHXjkz_4.js";import"./index-EJLGsV9R.js";import"./index-DwIy8s5K.js";import"./index-R6GrqbYj.js";import"./useEventCallback-DUoe3CsI.js";import"./SkeletonBar-CXuflC8R.js";import"./LoadingCell-vD5FHOaA.js";import"./ColumnConfigDialog-CT4XAy2M.js";import"./DraggableList-BsAXguPI.js";import"./search-Ba_3E6-e.js";import"./Input-CAkxXyLf.js";import"./useControlled-aWzuAlWu.js";import"./Button-BmQF-Ia9.js";import"./small-cross-CDkCMjNB.js";import"./ActionButton-D21Af3H6.js";import"./Checkbox-y8uSVOiI.js";import"./useValueChanged-CP-BBW9F.js";import"./CollapsiblePanel-RNfr1kyY.js";import"./MultiColumnSortDialog-CZo4S3zo.js";import"./MenuTrigger-B2PrT13W.js";import"./CompositeItem-wpUfw-Sy.js";import"./ToolbarRootContext-RyDWl030.js";import"./getDisabledMountTransitionStyles-BQhIpI0n.js";import"./getPseudoElementBounds-DLhJqY1Y.js";import"./chevron-down-CdGiAoum.js";import"./index-RC7u8s6f.js";import"./error-CEwiS4uA.js";import"./BaseCbacBanner-CcqWw-uT.js";import"./makeExternalStore-xL_Ap3fc.js";import"./Tooltip-BqsM21S7.js";import"./PopoverPopup-DPjg8bEK.js";import"./debounce-C55KCuAL.js";import"./useOsdkClient-BLejN4Am.js";import"./tick-DOsknYHf.js";import"./DropdownField-DTXS9S7w.js";import"./isEqual-Bv_Lvinp.js";import"./withOsdkMetrics-B8TnMVr-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
