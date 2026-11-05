import{j as i}from"./iframe-Cr2bpw19.js";import{O as p}from"./object-table-DCOccJp2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDF_01dY.js";import"./preload-helper-C_Wd2tIW.js";import"./Table-BjXngxCh.js";import"./index-HKSeYDtX.js";import"./Dialog-DgTafkr7.js";import"./cross-DerUaPtE.js";import"./svgIconContainer-BdwTWCXC.js";import"./useBaseUiId-BsHSNQc2.js";import"./InternalBackdrop-D4g3oYCc.js";import"./composite-Cktz544g.js";import"./index-tVKD-Epk.js";import"./index-BWlzJ_-u.js";import"./index-Bk25D5KY.js";import"./useEventCallback-0Un1rJGa.js";import"./SkeletonBar-CeIQhfQy.js";import"./LoadingCell-BxDMRyGf.js";import"./ColumnConfigDialog-B5IDj2oc.js";import"./DraggableList-CYS1PCg6.js";import"./search-aGII2Iab.js";import"./Input-D8iQjGaO.js";import"./useControlled-CtsC-hEl.js";import"./Button-wtCP8XMP.js";import"./small-cross-d4ra4Um-.js";import"./ActionButton-HPB4ADKq.js";import"./Checkbox-Cjhd7iqA.js";import"./useValueChanged-D31dGWaR.js";import"./CollapsiblePanel-DNu3bG03.js";import"./MultiColumnSortDialog-CkvUreHh.js";import"./MenuTrigger-1ulPFAHS.js";import"./CompositeItem-DiUvRjmE.js";import"./ToolbarRootContext-CivexTIu.js";import"./getDisabledMountTransitionStyles-DZln-1Iq.js";import"./getPseudoElementBounds-BCxYLTqf.js";import"./chevron-down-CPF_RvK3.js";import"./index-qHL-28bq.js";import"./error-s73FCl63.js";import"./BaseCbacBanner-Dw8piuko.js";import"./makeExternalStore-BO-peT-K.js";import"./Tooltip-VnOrH8hU.js";import"./isObject-srhcKzzy.js";import"./debounce-B3GzHEdf.js";import"./useOsdkClient-ClyAxHlq.js";import"./tick-BRyPHZ4_.js";import"./DropdownField-BfaMBsWj.js";import"./isEqual-eKau0Myf.js";import"./_baseIsEqual-tNXrt5IF.js";import"./withOsdkMetrics-Ceo_vgdr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
