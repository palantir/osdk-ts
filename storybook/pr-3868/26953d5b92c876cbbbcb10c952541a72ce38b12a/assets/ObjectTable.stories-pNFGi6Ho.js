import{j as i}from"./iframe-bNAYk0hy.js";import{O as p}from"./object-table-CSZxQBve.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B77ku5Zo.js";import"./preload-helper-CQ5U1hQl.js";import"./Table-DVRs9qlP.js";import"./index-eix3MTjz.js";import"./Dialog-DLZpRsoq.js";import"./cross-DSIbsL7t.js";import"./svgIconContainer-DJx5jlT5.js";import"./useBaseUiId-CikYSBzo.js";import"./InternalBackdrop-CAXB0gyq.js";import"./composite-C7-i_V8V.js";import"./index-IAiWYuzu.js";import"./index-BwgJiaXn.js";import"./index-BpDyLH-S.js";import"./useEventCallback-BldKbH1U.js";import"./SkeletonBar-CCifESnd.js";import"./LoadingCell-vMwLQa_p.js";import"./ColumnConfigDialog-DKStTV1K.js";import"./DraggableList-kmfbOYxS.js";import"./search-CvDdJ2-k.js";import"./Input-D9AajCS5.js";import"./useControlled-hDIfys90.js";import"./isEqual-CtDhx2lU.js";import"./isObject-By5jPSwj.js";import"./Button-VKmMP51o.js";import"./ActionButton-BHUPjqLL.js";import"./Checkbox-Dh435iFc.js";import"./useValueChanged-CvnHJGQT.js";import"./CollapsiblePanel-C6CSWqsF.js";import"./MultiColumnSortDialog-Jrkquew0.js";import"./MenuTrigger-DRrPLYuS.js";import"./CompositeItem-Bpfmjo39.js";import"./ToolbarRootContext-D9woatH8.js";import"./getDisabledMountTransitionStyles-CUjNZds2.js";import"./getPseudoElementBounds-DSHcjyVN.js";import"./chevron-down-CxlO7014.js";import"./index-Djn4JDgp.js";import"./error-B2PTJyqI.js";import"./BaseCbacBanner-C8OdJ0hg.js";import"./makeExternalStore-BlpmVTTs.js";import"./Tooltip-D7LvMzap.js";import"./PopoverPopup-DcP9tdE3.js";import"./toNumber-DMOXJ5Go.js";import"./useOsdkClient-gxN5dHTy.js";import"./tick-DRCq7k-D.js";import"./DropdownField-CEqU3eXX.js";import"./withOsdkMetrics-DtPiNcid.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
