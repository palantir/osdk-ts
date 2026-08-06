import{j as i}from"./iframe-BfhfREBy.js";import{O as p}from"./object-table-BdEKKWyG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Br4GMZA4.js";import"./preload-helper--XKw4bmx.js";import"./Table-DN6hBFu4.js";import"./index-DytRM3DZ.js";import"./Dialog-B0Iyhd92.js";import"./cross-BeF5Hfc8.js";import"./svgIconContainer-DBAOF07n.js";import"./useBaseUiId-BFH0KUQX.js";import"./InternalBackdrop-1__YM29z.js";import"./composite-_2f5sVOd.js";import"./index-ynePoQ8g.js";import"./index-Dr01-4SU.js";import"./index-Due1erN9.js";import"./useEventCallback-5TxWd5hj.js";import"./SkeletonBar-oAugGI6e.js";import"./LoadingCell-vJXMX0HJ.js";import"./ColumnConfigDialog-CoAejl9e.js";import"./DraggableList-BxysQdA1.js";import"./search-6CMwLJx5.js";import"./Input-E-9p2WY9.js";import"./useControlled-B4Njh2P6.js";import"./isEqual-B2hwdr13.js";import"./isObject-tY7pGC-G.js";import"./Button-DfmbIkJw.js";import"./ActionButton-z6kXkFRx.js";import"./Checkbox-D9ToZicP.js";import"./useValueChanged-D1bvJZ5p.js";import"./CollapsiblePanel-BfxFWlSw.js";import"./MultiColumnSortDialog-D60zZ5t3.js";import"./MenuTrigger-Dr4UXyqw.js";import"./CompositeItem-BAnZg7F8.js";import"./ToolbarRootContext-CzwlFaUf.js";import"./getDisabledMountTransitionStyles-KI8Efmvq.js";import"./getPseudoElementBounds-BKuKIZFt.js";import"./chevron-down-CxBM7YTA.js";import"./index-kesKYPJD.js";import"./error-CzQ0trJH.js";import"./BaseCbacBanner-L0MLNs4l.js";import"./makeExternalStore-BxS-AXBE.js";import"./Tooltip-zehB6lqO.js";import"./PopoverPopup-CaH83dTo.js";import"./toNumber-B_6qp_vj.js";import"./useOsdkClient-DJuT6gN4.js";import"./tick-DMyW0avk.js";import"./DropdownField-BVt6Qs1V.js";import"./withOsdkMetrics-D87XtM7j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
