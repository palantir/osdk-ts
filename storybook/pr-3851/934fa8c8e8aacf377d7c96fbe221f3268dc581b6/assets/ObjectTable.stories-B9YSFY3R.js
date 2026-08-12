import{j as i}from"./iframe-BwyxbMYz.js";import{O as p}from"./object-table-BxtmdX9W.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CB0HjD1p.js";import"./preload-helper-Ck4OFvFV.js";import"./Table-DcRonUfM.js";import"./index-eVyunh8z.js";import"./Dialog-C5X0AMsU.js";import"./cross-CtafeApd.js";import"./svgIconContainer-cOEOezOx.js";import"./useBaseUiId-Djb3rEs2.js";import"./InternalBackdrop-Dd3Xk-Dc.js";import"./composite-DbDlXcOS.js";import"./index-i1ZIkJqK.js";import"./index-BQkt-qop.js";import"./index-U83mhX69.js";import"./useEventCallback-CltMv-oE.js";import"./SkeletonBar-DjqhLsmr.js";import"./LoadingCell-eAjwk7pb.js";import"./ColumnConfigDialog-CiyiEvIH.js";import"./DraggableList-CNlCo6Kr.js";import"./search-396yxvmZ.js";import"./Input-DDDwFt7C.js";import"./useControlled-Py9LxNrl.js";import"./isEqual-DIRrgwz9.js";import"./isObject-DTwiK1hG.js";import"./Button-CpPh9842.js";import"./ActionButton-BNWfXUgE.js";import"./Checkbox-Dn5Ztj5L.js";import"./useValueChanged-SKNmCQXf.js";import"./CollapsiblePanel-DtfN20b1.js";import"./MultiColumnSortDialog-W19bvlsv.js";import"./MenuTrigger-CGPObCqt.js";import"./CompositeItem-CIt2Luhq.js";import"./ToolbarRootContext-aO87p-2A.js";import"./getDisabledMountTransitionStyles-CivvGP1V.js";import"./getPseudoElementBounds-H-udXKPL.js";import"./chevron-down-DRr_ZByO.js";import"./index-fGT3xXi5.js";import"./error-9Pqn15gd.js";import"./BaseCbacBanner-CNkNpGxu.js";import"./makeExternalStore-dts8SMdL.js";import"./Tooltip-D7nx6rGZ.js";import"./PopoverPopup-BI9lGcbu.js";import"./toNumber-BU-l8znT.js";import"./useOsdkClient-CGyb1dMs.js";import"./tick-CvcDBPDK.js";import"./DropdownField-DHsN0P8K.js";import"./withOsdkMetrics-YkGaLtA7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
