import{j as i}from"./iframe-5lzZwYPj.js";import{O as p}from"./object-table-UygSo6Tb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BT6EvsjH.js";import"./preload-helper-WKlZEuzV.js";import"./Table-CYxs-p7w.js";import"./index-DmpQA2dp.js";import"./Dialog-BL5ngvy_.js";import"./cross-Be5djBeG.js";import"./svgIconContainer-gxAyVnRe.js";import"./useBaseUiId-DfIUF55c.js";import"./InternalBackdrop-CSogwMiw.js";import"./composite-PZIUxoU6.js";import"./index-D7xhtA4Z.js";import"./index-CSotxX4i.js";import"./index-BynFqe0V.js";import"./useEventCallback-DFkI_Wkj.js";import"./SkeletonBar-CZuPbSrW.js";import"./LoadingCell-BOW6pmfZ.js";import"./ColumnConfigDialog-B_3yF-P2.js";import"./DraggableList-DWnYbq_V.js";import"./search-XZcqoY-Q.js";import"./Input-DcJ3J1h2.js";import"./useControlled-DHTN_Qw2.js";import"./Button-bfW4GHY6.js";import"./small-cross-Bb7OStik.js";import"./ActionButton-DgVQ6zLW.js";import"./Checkbox-Bc7vho6e.js";import"./useValueChanged-CtekWBgz.js";import"./CollapsiblePanel-Dc0aGLPo.js";import"./MultiColumnSortDialog-CxFWgp3k.js";import"./MenuTrigger-Bim_vt8i.js";import"./CompositeItem-DJOIGuOW.js";import"./ToolbarRootContext-BU433tXf.js";import"./getDisabledMountTransitionStyles-D1fP0s8e.js";import"./getPseudoElementBounds-B4sKXzPK.js";import"./chevron-down-Djuiqxwk.js";import"./index-Dle2g3lV.js";import"./error-BAoHpMsF.js";import"./BaseCbacBanner-Vc8jap16.js";import"./makeExternalStore-DzXze8D7.js";import"./Tooltip-eiDm927K.js";import"./PopoverPopup-BvZ2qG_8.js";import"./debounce-CCS3RbBn.js";import"./useOsdkClient-i1o2THdE.js";import"./tick-CdsCMYrr.js";import"./DropdownField-CNBl1CJk.js";import"./isEqual-BPkIwUmR.js";import"./withOsdkMetrics-DzXqb59o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
