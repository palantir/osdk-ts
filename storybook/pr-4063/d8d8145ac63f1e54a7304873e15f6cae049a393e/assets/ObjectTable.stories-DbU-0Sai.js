import{j as i}from"./iframe-Bhffutgo.js";import{O as p}from"./object-table-C15_AY3f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D01whbP1.js";import"./preload-helper-CijB9Qe5.js";import"./Table-BReufemI.js";import"./index-Cy8HD2CD.js";import"./Dialog-BZ52wkJR.js";import"./cross-B-UQ3Jxc.js";import"./svgIconContainer-Cic0cef0.js";import"./useBaseUiId--v1O0VA1.js";import"./InternalBackdrop-BkF4CyJK.js";import"./composite-DtoUIyyt.js";import"./index-JMjhMIpk.js";import"./index-DRActumb.js";import"./index-D-zTWlPE.js";import"./useEventCallback-Bd38vKKP.js";import"./SkeletonBar-ZDVpKAdj.js";import"./LoadingCell-9Ct1dbft.js";import"./ColumnConfigDialog-DarnXWK2.js";import"./DraggableList-Cr7FMIsr.js";import"./search-IXw9ma12.js";import"./Input-OY1OZr6O.js";import"./useControlled-B1I8CTdR.js";import"./Button-_SLvpwek.js";import"./small-cross-DELXwmlb.js";import"./ActionButton-BsZDi0RP.js";import"./Checkbox-DWDBNL5s.js";import"./useValueChanged-CXt43HWH.js";import"./CollapsiblePanel-BdEsZMnJ.js";import"./MultiColumnSortDialog-BT0SOBVp.js";import"./MenuTrigger-SZzKg6Lr.js";import"./CompositeItem-BZDrB-0o.js";import"./ToolbarRootContext-CmYX2cG0.js";import"./getDisabledMountTransitionStyles-Bh7kTFsz.js";import"./getPseudoElementBounds-0bpQxymW.js";import"./chevron-down-BcqETG9N.js";import"./index-srbhg0-l.js";import"./error-IjGqGtmT.js";import"./BaseCbacBanner-B8Ba5V9l.js";import"./makeExternalStore-NyFQcR5i.js";import"./Tooltip-C-_NZOL1.js";import"./PopoverPopup-BVUMi5tg.js";import"./debounce-SIEms-6v.js";import"./useOsdkClient-25Kii0Nm.js";import"./tick-Cb1TF6t_.js";import"./DropdownField-CuxPlTct.js";import"./isEqual-D8xq866P.js";import"./withOsdkMetrics-DAy7jDWc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
