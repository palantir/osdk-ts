import{j as i}from"./iframe-YB9hqlg8.js";import{O as p}from"./object-table-CD7SpME1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bdt4Ednp.js";import"./preload-helper-CTcVL9dw.js";import"./Table-DrHMf1Gd.js";import"./index-jQAJu0aU.js";import"./Dialog-DJHS4XZ-.js";import"./cross-CqHbx82J.js";import"./svgIconContainer-BewESC0Y.js";import"./useBaseUiId-BmL79WrH.js";import"./InternalBackdrop-BivpzZuB.js";import"./composite-DeqrZPcw.js";import"./index-BFeXeiP0.js";import"./index-Bs1x_wg2.js";import"./index-D3K0AaGz.js";import"./useEventCallback-CATv0rju.js";import"./SkeletonBar-jlasmcfA.js";import"./LoadingCell-VgJHmFvN.js";import"./ColumnConfigDialog-Cy0Jm0k3.js";import"./DraggableList-CBY145h4.js";import"./search-BY-8te7i.js";import"./Input-ZdgKVRhe.js";import"./useControlled-XI3b4Slf.js";import"./Button-BgGo20Fo.js";import"./small-cross-hcSISMg2.js";import"./ActionButton-XVSeG5b2.js";import"./Checkbox-L4D9I5_E.js";import"./useValueChanged-D9HByNMz.js";import"./CollapsiblePanel-g_xhSVun.js";import"./MultiColumnSortDialog-BrLJl6ZB.js";import"./MenuTrigger-Bhi0Gjm8.js";import"./CompositeItem-DRhQIZ9t.js";import"./ToolbarRootContext-DKnQVXJ0.js";import"./getDisabledMountTransitionStyles-CYvPsy0U.js";import"./getPseudoElementBounds-h_436N-i.js";import"./chevron-down-CLNGzp69.js";import"./index-BPsVLTCl.js";import"./error-C1jwt9uB.js";import"./BaseCbacBanner-BknyRiT5.js";import"./makeExternalStore-BXT9IRaw.js";import"./Tooltip-DZo35c7C.js";import"./PopoverPopup-DjR6kB2g.js";import"./debounce-CVTcs3d9.js";import"./useOsdkClient-ZayO5M1-.js";import"./tick-DcZMyZDK.js";import"./DropdownField-CxqUSWcN.js";import"./isEqual-Cv_n9nVu.js";import"./withOsdkMetrics-CyJ1msfC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
