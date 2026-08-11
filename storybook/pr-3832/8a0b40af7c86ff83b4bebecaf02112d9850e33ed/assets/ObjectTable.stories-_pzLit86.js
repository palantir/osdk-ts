import{j as i}from"./iframe-CCe3oj1_.js";import{O as p}from"./object-table-CROb0HRq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B800cruj.js";import"./preload-helper-DFkWM7QD.js";import"./Table-DoIqAcaB.js";import"./index-BPyzy7qu.js";import"./Dialog-BFaMtkwF.js";import"./cross-BDTGYN03.js";import"./svgIconContainer-BcG3A1s1.js";import"./useBaseUiId-DWTWML2t.js";import"./InternalBackdrop-1uHa4FUe.js";import"./composite-DqbFj3tO.js";import"./index-DTGTU5kW.js";import"./index-CkYleNx0.js";import"./index-CQvhHm5l.js";import"./useEventCallback-QjNDkh9X.js";import"./SkeletonBar-BNlO8cb5.js";import"./LoadingCell-D34UfXj6.js";import"./ColumnConfigDialog-aR_PIIpd.js";import"./DraggableList-DrokCpor.js";import"./search-CNcIQLsn.js";import"./Input-B1ejoj9_.js";import"./useControlled-AVWP1zK_.js";import"./isEqual-BwtxOLUF.js";import"./isObject-BSF7yE2W.js";import"./Button-DYv7LQZU.js";import"./ActionButton-BWTIEXpg.js";import"./Checkbox-CjAK5ooC.js";import"./useValueChanged-CLC9UCU3.js";import"./CollapsiblePanel-BP-T8vPY.js";import"./MultiColumnSortDialog-DZt2E2UT.js";import"./MenuTrigger-CMuSifoI.js";import"./CompositeItem-DcCJzpjE.js";import"./ToolbarRootContext-D_9Dq2Dw.js";import"./getDisabledMountTransitionStyles-TfqTWo-i.js";import"./getPseudoElementBounds-DgTPtVsI.js";import"./chevron-down-5Odr2hDD.js";import"./index-DpZ-Ikd6.js";import"./error-gLdyLM8b.js";import"./BaseCbacBanner-CbF4nqNt.js";import"./makeExternalStore-ee2D0j5X.js";import"./Tooltip-C9jv0QeK.js";import"./PopoverPopup-B1NzfUu_.js";import"./toNumber-CAcNYWAx.js";import"./useOsdkClient-Dn8nHjzs.js";import"./tick-qjntkw8T.js";import"./DropdownField-Bdf2R4vw.js";import"./withOsdkMetrics-BE4radvo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
