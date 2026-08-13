import{j as i}from"./iframe-CpI7FB-T.js";import{O as p}from"./object-table-Dexfdtqv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CizDLm1-.js";import"./preload-helper-B_hE2pBz.js";import"./Table-REyfQMd2.js";import"./index-Dd3y5ah7.js";import"./Dialog-KBoNfEPI.js";import"./cross-B20tfhAE.js";import"./svgIconContainer-CEg1T5tk.js";import"./useBaseUiId-CmfBo7dj.js";import"./InternalBackdrop-DZmYO_AD.js";import"./composite-BR65LiyS.js";import"./index-BPRvbx56.js";import"./index-DosPUwQU.js";import"./index-BDUgGgA4.js";import"./useEventCallback-B9o36XEn.js";import"./SkeletonBar-ULydxLuj.js";import"./LoadingCell-Z0bla46n.js";import"./ColumnConfigDialog-D-rJXor5.js";import"./DraggableList-xopIjLi6.js";import"./search-e6ClQ_VS.js";import"./Input-DdDoLRi6.js";import"./useControlled-CzotDDz1.js";import"./isEqual-DDC7Ff_s.js";import"./isObject-tXEwv9PV.js";import"./Button-CLOyqypH.js";import"./ActionButton-U9TB8zhE.js";import"./Checkbox-BH0H9xke.js";import"./useValueChanged-C9asjQNV.js";import"./CollapsiblePanel-CbWZAJxM.js";import"./MultiColumnSortDialog-CE_KwoFj.js";import"./MenuTrigger-C1BfiMac.js";import"./CompositeItem-CCWclQxp.js";import"./ToolbarRootContext-Bq8pd6_h.js";import"./getDisabledMountTransitionStyles-BO8zIF7H.js";import"./getPseudoElementBounds-sBl5ZUwT.js";import"./chevron-down-JaiM5xR9.js";import"./index-DzEbTyMP.js";import"./error-DM5U_BtV.js";import"./BaseCbacBanner-Dr_UpDH_.js";import"./makeExternalStore-NLBkDu7_.js";import"./Tooltip-EwE4yKNF.js";import"./PopoverPopup-CURpd358.js";import"./toNumber-yBJeXRUy.js";import"./useOsdkClient-I2HrApfP.js";import"./tick-DdhDmdN8.js";import"./DropdownField-DL3w_3o5.js";import"./withOsdkMetrics-ADEd6SH7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
