import{j as i}from"./iframe-BK35Aetk.js";import{O as p}from"./object-table-CkCnEar3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C79EqFRc.js";import"./preload-helper-CSbGcA9T.js";import"./Table-DGVjD7XG.js";import"./index-CRoVE56T.js";import"./Dialog-COzctyK2.js";import"./cross-B0y6D7Iy.js";import"./svgIconContainer-CSIx5hfy.js";import"./useBaseUiId-wzcWLuni.js";import"./InternalBackdrop-Ch6GACCQ.js";import"./composite-BC1NOOFJ.js";import"./index-DW1QNimG.js";import"./index-CMsvzF6c.js";import"./index-CS1BdUz3.js";import"./useEventCallback-BMEbCQj6.js";import"./SkeletonBar-BmOvAKiB.js";import"./LoadingCell-CctttUKX.js";import"./ColumnConfigDialog-D8jneHNT.js";import"./DraggableList-CA5PY4G1.js";import"./search-BlafU9EC.js";import"./Input-BBffaDeP.js";import"./useControlled-Dh0EQZ-9.js";import"./Button-DM8aYBS9.js";import"./small-cross-BMXPDC9b.js";import"./ActionButton-kIs-FADX.js";import"./Checkbox-Bb9DIJfr.js";import"./useValueChanged-Dhfv4x3U.js";import"./CollapsiblePanel-DrdyzccY.js";import"./MultiColumnSortDialog-D0ulr6k9.js";import"./MenuTrigger-9ezUGiea.js";import"./CompositeItem-1I2WlbJ9.js";import"./ToolbarRootContext-BdRYVpKL.js";import"./getDisabledMountTransitionStyles-CWWRm8ZG.js";import"./getPseudoElementBounds-Bmg_H6Mu.js";import"./chevron-down-CyfgKJCg.js";import"./index-DhoMcwTi.js";import"./error-DLnzRR-1.js";import"./BaseCbacBanner-DJTrs5I0.js";import"./makeExternalStore-CRBaxVJ6.js";import"./Tooltip-D-esBjUo.js";import"./PopoverPopup-DNHFOhuU.js";import"./debounce-DaJCVt97.js";import"./useOsdkClient-xrzUDYQQ.js";import"./tick-Cdslhrb5.js";import"./DropdownField-Bdh0YP6p.js";import"./isEqual-DiF47LLT.js";import"./withOsdkMetrics-BZ06iEbV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
