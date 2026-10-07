import{j as i}from"./iframe-q2c2VLg1.js";import{O as p}from"./object-table-B4HfjqZM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CH-Ighr1.js";import"./preload-helper-Dd4fXQyN.js";import"./Table-CHyiWqlF.js";import"./index-CRaifptZ.js";import"./Dialog-BbMkATkH.js";import"./cross-CcrMbm-0.js";import"./svgIconContainer-BlrvzrEz.js";import"./useBaseUiId-omTFJ4IU.js";import"./InternalBackdrop-CTJCbO8j.js";import"./composite-NSumfvPY.js";import"./index-4j_oKqKk.js";import"./index-9q1QNwoC.js";import"./index-Ch4BOwgF.js";import"./useEventCallback-BNjTdnVh.js";import"./SkeletonBar-CmnjTk1p.js";import"./LoadingCell-Cwt8KlOw.js";import"./ColumnConfigDialog-02CFeY74.js";import"./DraggableList-CLoGBAZH.js";import"./search-B-fHJPoD.js";import"./Input-BRmugyzW.js";import"./useControlled-CAFIwmV7.js";import"./Button-BsjIA1gg.js";import"./small-cross-BupKOZtI.js";import"./ActionButton-B33HwgcC.js";import"./Checkbox-DSR4bz5U.js";import"./useValueChanged-DKgjsggr.js";import"./CollapsiblePanel-Dpq-3A02.js";import"./MultiColumnSortDialog-vjsXkIXe.js";import"./MenuTrigger-DQv_UTwZ.js";import"./CompositeItem-DvufjjXa.js";import"./ToolbarRootContext-gOhTdtut.js";import"./getDisabledMountTransitionStyles-CnTFITkJ.js";import"./getPseudoElementBounds-D7yijoXW.js";import"./chevron-down-BiLdY5Pu.js";import"./index-Br8J5rfr.js";import"./error-D-r93luQ.js";import"./BaseCbacBanner-3Q4NPe38.js";import"./makeExternalStore-BO8xauxU.js";import"./Tooltip-Di0qEmWK.js";import"./PopoverPopup--4kjghnN.js";import"./debounce-C-ob5Pqr.js";import"./useOsdkClient-hNGabp8J.js";import"./tick-Bb3qh1mv.js";import"./DropdownField-Bthj7fif.js";import"./isEqual-3wGjHPnA.js";import"./withOsdkMetrics-DYLb2cmM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
