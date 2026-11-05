import{j as i}from"./iframe-Dhwk5ITi.js";import{O as p}from"./object-table-BJqi85zj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DeFEJKYA.js";import"./preload-helper-DXH7Ji2G.js";import"./Table-DXVv-Xkz.js";import"./index-CqrX2hSZ.js";import"./Dialog-D7ArHBQX.js";import"./cross-BCTjTq5q.js";import"./svgIconContainer-DRo39Sdm.js";import"./useBaseUiId-CN9ap6QA.js";import"./InternalBackdrop-B16TXcDZ.js";import"./composite-Q4thQ8nQ.js";import"./index-Dqvhhr9j.js";import"./index-CQyEu1u7.js";import"./index-D-uqDeUc.js";import"./useEventCallback-CtBf5HaK.js";import"./SkeletonBar-BNjj6R1f.js";import"./LoadingCell-B1AXdpYe.js";import"./ColumnConfigDialog-Biqiolfe.js";import"./DraggableList-B-RBDkIm.js";import"./search-Be1zlQKz.js";import"./Input-BHNHysVZ.js";import"./useControlled-BzFCle-k.js";import"./Button-DQ5CRvak.js";import"./small-cross-BCB9roFn.js";import"./ActionButton-BKUAvIZF.js";import"./Checkbox-CGwy-5-U.js";import"./useValueChanged-BE0789MN.js";import"./CollapsiblePanel-DYfViWWc.js";import"./MultiColumnSortDialog-COFC3sIH.js";import"./MenuTrigger-BUD57go2.js";import"./CompositeItem-fUd5V9Oq.js";import"./ToolbarRootContext-tq1uYlSQ.js";import"./getDisabledMountTransitionStyles-DrXurUP0.js";import"./getPseudoElementBounds-BrIYTXPl.js";import"./chevron-down-Bi9ECMIR.js";import"./index-CTvXLxpd.js";import"./error--SrXy3UU.js";import"./BaseCbacBanner-DHZ3DNXo.js";import"./makeExternalStore-3kaAWetO.js";import"./Tooltip-B-otFcUC.js";import"./isObject-COnjlVPb.js";import"./debounce-D0JC05Tw.js";import"./useOsdkClient-Cu4fdH1j.js";import"./tick-cIKEoG11.js";import"./DropdownField-CNKhRnuu.js";import"./isEqual-BJTmeTes.js";import"./_baseIsEqual-_JiTCUc9.js";import"./withOsdkMetrics-Cikn35t1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
