import{j as i}from"./iframe-_pZ-OrnG.js";import{O as p}from"./object-table-r3WkwVVv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BAuljeY5.js";import"./preload-helper-CI2nkxYP.js";import"./Table-OtroCakx.js";import"./index-BzR1Js4P.js";import"./Dialog-BQJcGlPc.js";import"./cross-DHXoKhRr.js";import"./svgIconContainer-Df8znJbK.js";import"./useBaseUiId-sTNVvHGV.js";import"./InternalBackdrop-Bo6uJZfN.js";import"./composite-s_PtHBLY.js";import"./index-C7S3dsZZ.js";import"./index-fBaLvFhr.js";import"./index-BarU5QY7.js";import"./useEventCallback-ChWi4eCf.js";import"./SkeletonBar-BFdlYeDG.js";import"./LoadingCell-D1X8FIjN.js";import"./ColumnConfigDialog-BPSyj1CE.js";import"./DraggableList-BLYOh7Ub.js";import"./search-ChtcLVXZ.js";import"./Input-DDttcV3K.js";import"./useControlled-MIg91upF.js";import"./Button-HWVms3sL.js";import"./small-cross-cg-4l1k7.js";import"./ActionButton-CtdL7XCW.js";import"./Checkbox-xcdgEr09.js";import"./useValueChanged-BA_OyhSR.js";import"./CollapsiblePanel-D-pLoE7v.js";import"./MultiColumnSortDialog-C9MPFbPJ.js";import"./MenuTrigger-C6Iqz-rw.js";import"./CompositeItem-1-7kFxMp.js";import"./ToolbarRootContext-DDubgB6v.js";import"./getDisabledMountTransitionStyles-D1TqjFAj.js";import"./getPseudoElementBounds-CSJkhnGQ.js";import"./chevron-down-DaGWzrOS.js";import"./index-5qJDayCH.js";import"./error-CDa2ZV4b.js";import"./BaseCbacBanner-B5NHyS1X.js";import"./makeExternalStore-_KUFuRZc.js";import"./Tooltip-Cv-ahOg4.js";import"./PopoverPopup-CeDlnkfZ.js";import"./debounce-Cs0rV5XU.js";import"./useOsdkClient-CXug1a02.js";import"./tick-B25sgwJt.js";import"./DropdownField-Boodu9_n.js";import"./isEqual-DkHXmUl6.js";import"./withOsdkMetrics-CNAkmbs_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
