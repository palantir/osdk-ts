import{j as i}from"./iframe-DjY-zq4T.js";import{O as p}from"./object-table-DF-QdHhQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dacd4SlZ.js";import"./preload-helper-CSEk-Qtk.js";import"./Table-CRhnJW7k.js";import"./index-06oOGq9j.js";import"./Dialog--nsazc34.js";import"./cross-DERUs9CV.js";import"./svgIconContainer-CNapEC-k.js";import"./useBaseUiId-DFp5uyUH.js";import"./InternalBackdrop-D26JwQLJ.js";import"./composite-DCY6uWMU.js";import"./index-BMjnIn7f.js";import"./index-DcxaLnPt.js";import"./index-DGTC5i-x.js";import"./useEventCallback-PzgcCUA9.js";import"./SkeletonBar-Dx8ysvQu.js";import"./LoadingCell-5sAwNk9V.js";import"./ColumnConfigDialog-COWDssjh.js";import"./DraggableList-CCT3vpwl.js";import"./search-BkyKKFx6.js";import"./Input-C4MHDVmb.js";import"./useControlled-B48Xem7I.js";import"./Button-DVfilVoY.js";import"./small-cross-BKuGvg88.js";import"./ActionButton-ftxjW6SC.js";import"./Checkbox-D5y-CTW9.js";import"./useValueChanged-CSpnuk84.js";import"./CollapsiblePanel-DgbylnBx.js";import"./MultiColumnSortDialog-DgRGdUyK.js";import"./MenuTrigger-C_DmCeIw.js";import"./CompositeItem-OryclLtR.js";import"./ToolbarRootContext-Ck5kVxm5.js";import"./getDisabledMountTransitionStyles-6jqwt93X.js";import"./getPseudoElementBounds-By1yLBCg.js";import"./chevron-down-KVYlhqEa.js";import"./index-DCZf_Vkp.js";import"./error-g17Ipf4s.js";import"./BaseCbacBanner-Ik5u6QMH.js";import"./makeExternalStore-CXgGJpDa.js";import"./Tooltip-C_N0df2q.js";import"./PopoverPopup-CTuviyVj.js";import"./debounce-Dw9byVJT.js";import"./useOsdkClient-B0KEPQnu.js";import"./tick-BxkXNXsP.js";import"./DropdownField-DRuEdDXo.js";import"./isEqual-S7vVAoQa.js";import"./withOsdkMetrics-CBDxrN4p.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
