import{j as i}from"./iframe-BmTfPnlj.js";import{O as p}from"./object-table-DuwyKVEZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7RlycNPD.js";import"./preload-helper-Bt_1BQmW.js";import"./Table-BQzYY4p1.js";import"./index-Bm1AuuXK.js";import"./Dialog-CLdygFMh.js";import"./cross-1FUbPxXE.js";import"./svgIconContainer-B7k9FdbM.js";import"./useBaseUiId-CCBNiAGi.js";import"./InternalBackdrop-D1OaTL7l.js";import"./composite-EJeYuU8b.js";import"./index-CXPEIkSW.js";import"./index-SU5jaKKw.js";import"./index-CpTFd5F4.js";import"./useEventCallback-CthUr-8o.js";import"./SkeletonBar-xGbITfKH.js";import"./LoadingCell-im-jO5xv.js";import"./ColumnConfigDialog-DMDJcMq5.js";import"./DraggableList-B9SvoxHN.js";import"./search-CB8fQpSi.js";import"./Input-DCbUCzbU.js";import"./useControlled-DnL-NKvx.js";import"./Button-B5eSVAk7.js";import"./small-cross-C79mcn34.js";import"./ActionButton-cPylYcIf.js";import"./Checkbox-BWJ9MvvS.js";import"./useValueChanged-DFht__m8.js";import"./CollapsiblePanel-Gfd_BnuO.js";import"./MultiColumnSortDialog-BQzltBiA.js";import"./MenuTrigger-B34U6tOS.js";import"./CompositeItem-BMTpDb-Q.js";import"./ToolbarRootContext-BGVsEm7y.js";import"./getDisabledMountTransitionStyles-BN0kS-V3.js";import"./getPseudoElementBounds-DXAkgdW7.js";import"./chevron-down-BcbzO8DN.js";import"./index-CIA5CVhr.js";import"./error-DAivNTLD.js";import"./BaseCbacBanner-DpXuSF7U.js";import"./makeExternalStore-D35ZSxQs.js";import"./Tooltip-BF_5RxMC.js";import"./PopoverPopup-DP_BVDXy.js";import"./debounce-rwBGYxkZ.js";import"./useOsdkClient-Cv-kkUDW.js";import"./tick-BZF5qhIw.js";import"./DropdownField-CWmI2VfS.js";import"./isEqual-9M4q6ORL.js";import"./withOsdkMetrics-NcWgtcUH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
