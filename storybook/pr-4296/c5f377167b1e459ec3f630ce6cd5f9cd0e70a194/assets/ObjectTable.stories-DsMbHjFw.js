import{j as i}from"./iframe-X83lPBeu.js";import{O as p}from"./object-table-Y_3wYW9d.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CAHq_IB2.js";import"./preload-helper-B2sKPI8B.js";import"./Table-MemkOZOO.js";import"./index-BQDctdoe.js";import"./Dialog-DEiSH4_y.js";import"./cross-DESSfx8f.js";import"./svgIconContainer-CrLLWaC0.js";import"./useBaseUiId-CXpBK7Xe.js";import"./InternalBackdrop-CPq4-grn.js";import"./composite-C3KQbPWK.js";import"./index-CC_w3gYY.js";import"./index-DeDXgDsX.js";import"./index-DJhqSZmI.js";import"./useEventCallback-BzkW8p-_.js";import"./SkeletonBar-C-PQinYo.js";import"./LoadingCell-CZpi8tRS.js";import"./ColumnConfigDialog-DEaTwFfm.js";import"./DraggableList-DWHIIeJB.js";import"./search-CGhIjKAK.js";import"./Input-C5377Qeu.js";import"./useControlled-CRW8vka0.js";import"./Button-C6LVoI3t.js";import"./small-cross-BGOiG0gJ.js";import"./ActionButton-CA6MrVcg.js";import"./Checkbox-DY07kqsM.js";import"./useValueChanged-CpfWf914.js";import"./CollapsiblePanel-CrXH_pxU.js";import"./MultiColumnSortDialog-BhobuEes.js";import"./MenuTrigger-DjoQlH_H.js";import"./CompositeItem-DmkSf1ho.js";import"./ToolbarRootContext-DNKVBjDF.js";import"./getDisabledMountTransitionStyles-DAbmYawC.js";import"./getPseudoElementBounds-Mr0Voovu.js";import"./chevron-down-C6VkVqqF.js";import"./index-ArSP-sSJ.js";import"./error-gzJnjayk.js";import"./BaseCbacBanner-KZqmSl10.js";import"./makeExternalStore-D0mNPEg-.js";import"./Tooltip-BTG2SIH8.js";import"./PopoverPopup-G2s0F852.js";import"./debounce-CJcmUv4x.js";import"./useOsdkClient-CMlwPsT9.js";import"./tick-ClK8H8tK.js";import"./DropdownField-D0HzhIcj.js";import"./isEqual-C0ftKMoJ.js";import"./withOsdkMetrics-DWVSjT_8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
