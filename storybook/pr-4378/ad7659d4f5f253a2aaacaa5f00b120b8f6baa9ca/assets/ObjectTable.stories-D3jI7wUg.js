import{j as i}from"./iframe-BGt7IhdS.js";import{O as p}from"./object-table-M-Kg_adD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CzG6HmoC.js";import"./preload-helper-DUkvm5oM.js";import"./Table-D4qL2JfY.js";import"./index-gkzrPHGR.js";import"./Dialog-FEhrWvxq.js";import"./cross-Cb9gWeTe.js";import"./svgIconContainer-Bf5Aovc1.js";import"./useBaseUiId-Dcw5wc3b.js";import"./InternalBackdrop-S55VIO1-.js";import"./composite-CtTlfVza.js";import"./index-DUEp08qS.js";import"./index-W3km3k8_.js";import"./index-CNVam7GG.js";import"./useEventCallback-JNIdHdBh.js";import"./SkeletonBar-CgrFEgnf.js";import"./LoadingCell-_2ldlBj_.js";import"./ColumnConfigDialog-BFunB1CC.js";import"./DraggableList-DhrRiD7Y.js";import"./search-B8wvEhc-.js";import"./Input-BDhQTr7d.js";import"./useControlled-BgB3rMOH.js";import"./Button-Bf0GrAaJ.js";import"./small-cross-D5oEM4rj.js";import"./ActionButton-BLtk1IHL.js";import"./Checkbox-TkM9h5Go.js";import"./useValueChanged-CBLz-uPE.js";import"./CollapsiblePanel-C6psZrkp.js";import"./MultiColumnSortDialog-DAOqHewy.js";import"./MenuTrigger-Bm6hwNKU.js";import"./CompositeItem-VInoCAcU.js";import"./ToolbarRootContext-DcgyCrBd.js";import"./getDisabledMountTransitionStyles-B653rn17.js";import"./getPseudoElementBounds-C4Cn99UK.js";import"./chevron-down-DB4w1r6J.js";import"./index-C1TCtrZ_.js";import"./error-5t3qELAN.js";import"./BaseCbacBanner-BMXAVja9.js";import"./makeExternalStore-Crpu5ieT.js";import"./Tooltip-Bj8KxrzN.js";import"./isObject-Ce9k2qqC.js";import"./debounce-B-wJIF06.js";import"./useOsdkClient-BcDStKp7.js";import"./tick-BMa_7DrH.js";import"./DropdownField-DLrwqyVG.js";import"./isEqual-nup27oBZ.js";import"./_baseIsEqual-DupyGeRb.js";import"./withOsdkMetrics-BEwucJks.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
