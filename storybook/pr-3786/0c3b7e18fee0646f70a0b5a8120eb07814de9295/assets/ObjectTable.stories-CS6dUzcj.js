import{j as i}from"./iframe-BfP11NvA.js";import{O as p}from"./object-table-CjugmRYR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BAw4Road.js";import"./preload-helper-Ar0nMGVE.js";import"./Table-Bi1LYgVR.js";import"./index-BtDjnjzp.js";import"./Dialog-DonJtVW6.js";import"./cross-COrWa_24.js";import"./svgIconContainer-CxA6KOQ9.js";import"./useBaseUiId-B7gorTvD.js";import"./InternalBackdrop-BznIiDAT.js";import"./composite-_14HkfA4.js";import"./index-Yx7vvy63.js";import"./index-BimT9-xO.js";import"./index-DJx2-acM.js";import"./useEventCallback-Bo3zAIbr.js";import"./SkeletonBar-CrHwtUgt.js";import"./LoadingCell-CRN4ygui.js";import"./ColumnConfigDialog-BP_I0gCY.js";import"./DraggableList-CMWiB7CB.js";import"./search-NB8ZSPAF.js";import"./Input-RCL9WojW.js";import"./useControlled-CHjSEWNF.js";import"./isEqual-CCeuNt0t.js";import"./isObject-DIwwZTdB.js";import"./Button-C9Ik4Jdr.js";import"./ActionButton-BY8jrqFK.js";import"./Checkbox-2-ftotcm.js";import"./useValueChanged-DbFPx7-x.js";import"./CollapsiblePanel-DznffW2m.js";import"./MultiColumnSortDialog-BBf8tKOg.js";import"./MenuTrigger-DHt7BKIE.js";import"./CompositeItem-D36geE3c.js";import"./ToolbarRootContext-DH5dsK8B.js";import"./getDisabledMountTransitionStyles-Ozz7nPdo.js";import"./getPseudoElementBounds-CrpflqmA.js";import"./chevron-down-DZOqnKTY.js";import"./index-x1DBPJSn.js";import"./error-CCCFoFwU.js";import"./BaseCbacBanner-2OfszpKN.js";import"./makeExternalStore-D_R0EHxO.js";import"./Tooltip-BS7vvywK.js";import"./PopoverPopup-DO9cZa8-.js";import"./toNumber-D9oDVyIB.js";import"./useOsdkClient-Uu_9Pssb.js";import"./tick-D1Eh9Wqu.js";import"./DropdownField-9gIH2QfH.js";import"./withOsdkMetrics-kOUFMrtB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
